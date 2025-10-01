import { useState } from "react";
import { X, Download, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import aboutData from "@/data/about.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import awardsData from "@/data/awards.json";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const dataFiles = [
  { key: "about", label: "About", data: aboutData },
  { key: "experience", label: "Experience", data: experienceData },
  { key: "skills", label: "Skills", data: skillsData },
  { key: "projects", label: "Projects", data: projectsData },
  { key: "awards", label: "Awards", data: awardsData },
];

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [editData, setEditData] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState("about");

  const loadData = (data: unknown) => {
    return JSON.stringify(data, null, 2);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const fileData = dataFiles.find(f => f.key === value)?.data;
    if (fileData && !editData[value]) {
      const data = loadData(fileData);
      setEditData(prev => ({ ...prev, [value]: data }));
    }
  };

  const handleDownloadAll = () => {
    const allData: Record<string, unknown> = {};
    
    for (const { key, data } of dataFiles) {
      allData[key] = data;
    }

    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-data.json";
    link.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Download Complete",
      description: "All data has been downloaded as JSON file.",
    });
  };

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target?.result as string);
            toast({
              title: "Upload Successful",
              description: "Data structure loaded. Please review and save.",
            });
            // In a real implementation, you would update the editData state here
            console.log("Uploaded data:", data);
          } catch (error) {
            toast({
              title: "Upload Failed",
              description: "Invalid JSON file format.",
              variant: "destructive",
            });
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleSave = () => {
    toast({
      title: "Save Feature",
      description: "In a production environment, this would save changes to your data files. Since this is a static site, consider using localStorage or a backend API.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-portfolio bg-clip-text text-transparent">
            Admin Panel
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 mb-4">
          <Button onClick={handleDownloadAll} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download All
          </Button>
          <Button onClick={handleUpload} variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload JSON
          </Button>
          <Button onClick={handleSave} size="sm" className="bg-gradient-portfolio">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="grid w-full grid-cols-5">
            {dataFiles.map(({ key, label }) => (
              <TabsTrigger key={key} value={key}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {dataFiles.map(({ key, label }) => (
            <TabsContent key={key} value={key} className="flex-1 overflow-y-auto mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{label} Data</h3>
                </div>
                <Textarea
                  value={editData[key] || "Loading..."}
                  onChange={(e) => setEditData(prev => ({ ...prev, [key]: e.target.value }))}
                  className="font-mono text-sm min-h-[400px]"
                  placeholder={`Edit ${label.toLowerCase()} data...`}
                />
                <p className="text-sm text-muted-foreground">
                  Edit the JSON data above. Make sure to maintain valid JSON syntax.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-4 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
          <p className="font-semibold mb-2">📝 Note for Static Sites:</p>
          <p>
            Since this is a static site, changes made here are temporary and won't persist after page reload.
            For production use, consider:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Using localStorage for client-side persistence</li>
            <li>Implementing a backend API with Lovable Cloud</li>
            <li>Using a headless CMS for content management</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
