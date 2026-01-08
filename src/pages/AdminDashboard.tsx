import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Save, MessageSquare, Users, FileText, Upload, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useWebsiteContent, useUpdateWebsiteContent, useContactMessages } from '@/hooks/useWebsiteContent';
import { useRegistrations } from '@/hooks/useRegistration';
import { useCFPFile, useUploadCFPFile, getCFPFileUrl } from '@/hooks/useCFPFile';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: content } = useWebsiteContent();
  const { data: contactMessages } = useContactMessages();
  const { data: cfpFile } = useCFPFile();
  const { data: registrations } = useRegistrations();
  const updateContent = useUpdateWebsiteContent();
  const uploadCFP = useUploadCFPFile();
  
  const [editableContent, setEditableContent] = useState<Record<string, string>>({});
  const [cfpFileInput, setCfpFileInput] = useState<File | null>(null);

  useEffect(() => {
    // Check admin session
    const adminSession = localStorage.getItem('adminSession');
    if (!adminSession) {
      navigate('/admin/login');
      return;
    }

    // Initialize editable content
    if (content) {
      const contentMap: Record<string, string> = {};
      content.forEach(item => {
        contentMap[`${item.section}_${item.key}`] = item.value;
      });
      setEditableContent(contentMap);
    }
  }, [navigate, content]);

  // Debug logging for data fetching
  useEffect(() => {
    console.log('Admin Dashboard Data:', {
      content: content?.length || 0,
      contactMessages: contactMessages?.length || 0,
      registrations: registrations?.length || 0,
      cfpFile
    });
  }, [content, contactMessages, registrations, cfpFile]);

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    navigate('/admin/login');
  };

  const handleContentUpdate = async (section: string, key: string, value: string) => {
    try {
      await updateContent.mutateAsync({ section, key, value });
      toast({
        title: "Content Updated",
        description: `${section} ${key} has been updated successfully.`,
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Failed to update content. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCFPUpload = async () => {
    if (!cfpFileInput) {
      toast({
        title: "No File Selected",
        description: "Please select a PDF file to upload.",
        variant: "destructive",
      });
      return;
    }

    try {
      await uploadCFP.mutateAsync(cfpFileInput);
      setCfpFileInput(null);
      toast({
        title: "CFP Uploaded",
        description: "Call for Papers PDF has been uploaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload CFP file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderContentEditor = (section: string, key: string, label: string, type: 'input' | 'textarea' = 'input') => {
    const contentKey = `${section}_${key}`;
    const value = editableContent[contentKey] || '';

    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        {type === 'textarea' ? (
          <Textarea
            value={value}
            onChange={(e) => setEditableContent({ ...editableContent, [contentKey]: e.target.value })}
            rows={4}
          />
        ) : (
          <Input
            value={value}
            onChange={(e) => setEditableContent({ ...editableContent, [contentKey]: e.target.value })}
          />
        )}
        <Button
          size="sm"
          onClick={() => handleContentUpdate(section, key, value)}
          disabled={updateContent.isPending}
        >
          <Save className="h-4 w-4 mr-1" />
          Save
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">TAG-PC Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">
              <FileText className="h-4 w-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="registrations">
              <Users className="h-4 w-4 mr-2" />
              Registrations ({registrations?.length || 0})
            </TabsTrigger>
            <TabsTrigger value="messages">
              <MessageSquare className="h-4 w-4 mr-2" />
              Messages ({contactMessages?.length || 0})
              {(contactMessages?.length || 0) > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1">NEW</span>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid gap-6">
              {/* Hero Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Hero Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {renderContentEditor('hero', 'title', 'Conference Title', 'textarea')}
                  {renderContentEditor('hero', 'subtitle', 'Conference Subtitle')}
                  {renderContentEditor('hero', 'cfp_link', 'CFP Link')}
                </CardContent>
              </Card>

              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle>About Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {renderContentEditor('about', 'title', 'About Title')}
                  {renderContentEditor('about', 'content', 'About Content', 'textarea')}
                </CardContent>
              </Card>

              {/* CFP Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Call for Papers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {renderContentEditor('cfp', 'title', 'CFP Title')}
                  {renderContentEditor('cfp', 'intro', 'CFP Introduction', 'textarea')}
                  
                  {/* CFP File Upload */}
                  <div className="space-y-2 border-t pt-4">
                    <Label>CFP PDF File</Label>
                    {cfpFile && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Current file: {cfpFile.name}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(getCFPFileUrl(cfpFile.name), '_blank')}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )}
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => setCfpFileInput(e.target.files?.[0] || null)}
                    />
                    <Button
                      onClick={handleCFPUpload}
                      disabled={!cfpFileInput || uploadCFP.isPending}
                    >
                      <Upload className="h-4 w-4 mr-1" />
                      Upload CFP PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {renderContentEditor('dates', 'abstract_deadline', 'Abstract Deadline')}
                  {renderContentEditor('dates', 'notification_date', 'Notification Date')}
                  {renderContentEditor('dates', 'full_paper_deadline', 'Full Paper Deadline')}
                  {renderContentEditor('dates', 'conference_dates', 'Conference Dates')}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {renderContentEditor('contact', 'email', 'Contact Email')}
                  {renderContentEditor('contact', 'address', 'Address', 'textarea')}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Registrations Management */}
          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <CardTitle>Conference Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registrations?.length ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border p-3 text-left">Name</th>
                            <th className="border border-border p-3 text-left">Email</th>
                            <th className="border border-border p-3 text-left">Category</th>
                            <th className="border border-border p-3 text-left">Affiliation</th>
                            <th className="border border-border p-3 text-left">Abstract Title</th>
                            <th className="border border-border p-3 text-left">Presentation</th>
                            <th className="border border-border p-3 text-left">Status</th>
                            <th className="border border-border p-3 text-left">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {registrations.map((registration) => (
                            <tr key={registration.id} className="hover:bg-muted/50">
                              <td className="border border-border p-3">{registration.full_name}</td>
                              <td className="border border-border p-3">{registration.email}</td>
                              <td className="border border-border p-3">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                                  {registration.category}
                                </span>
                              </td>
                              <td className="border border-border p-3">{registration.affiliation || 'N/A'}</td>
                              <td className="border border-border p-3">{registration.abstract_title || 'N/A'}</td>
                              <td className="border border-border p-3">{registration.presentation_type || 'N/A'}</td>
                              <td className="border border-border p-3">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                                  registration.payment_status === 'paid' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {registration.payment_status}
                                </span>
                              </td>
                              <td className="border border-border p-3">
                                {new Date(registration.created_at).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">No registrations yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>


          {/* Messages */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMessages?.length ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border p-3 text-left">Name</th>
                            <th className="border border-border p-3 text-left">Email</th>
                            <th className="border border-border p-3 text-left">Message</th>
                            <th className="border border-border p-3 text-left">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contactMessages.map((message) => (
                            <tr key={message.id} className="hover:bg-muted/50">
                              <td className="border border-border p-3 font-medium">{message.name}</td>
                              <td className="border border-border p-3">{message.email}</td>
                              <td className="border border-border p-3 max-w-md">
                                <div className="truncate" title={message.message}>
                                  {message.message}
                                </div>
                              </td>
                              <td className="border border-border p-3">
                                {new Date(message.created_at).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">No messages yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Current Admin Credentials</h3>
                    <p className="text-sm text-muted-foreground">Username: admin</p>
                    <p className="text-sm text-muted-foreground">Password: admin123</p>
                  </div>
                  
                  <Button variant="outline">
                    Change Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;