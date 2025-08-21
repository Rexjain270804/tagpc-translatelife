import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Save, MessageSquare, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useWebsiteContent, useUpdateWebsiteContent, useCommitteeMembers, useContactMessages } from '@/hooks/useWebsiteContent';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: content } = useWebsiteContent();
  const { data: committeeMembers } = useCommitteeMembers();
  const { data: contactMessages } = useContactMessages();
  const updateContent = useUpdateWebsiteContent();
  
  const [editableContent, setEditableContent] = useState<Record<string, string>>({});

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
            <TabsTrigger value="committee">
              <Users className="h-4 w-4 mr-2" />
              Committee
            </TabsTrigger>
            <TabsTrigger value="messages">
              <MessageSquare className="h-4 w-4 mr-2" />
              Messages ({contactMessages?.length || 0})
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

          {/* Committee Management */}
          <TabsContent value="committee">
            <Card>
              <CardHeader>
                <CardTitle>Committee Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {committeeMembers?.map((member) => (
                    <div key={member.id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                      {member.email && <p className="text-sm">{member.email}</p>}
                    </div>
                  ))}
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
                  {contactMessages?.map((message) => (
                    <div key={message.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{message.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          {new Date(message.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{message.email}</p>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  )) || (
                    <p className="text-muted-foreground">No messages yet.</p>
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