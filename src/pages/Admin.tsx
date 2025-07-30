
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { sanitizeHtml } from '@/utils/inputSanitization';

interface Contact {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  service: string | null;
  budget: string | null;
  urgency: string | null;
  message: string;
  created_at: string;
  additional_data: any;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const { signOut } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching contacts:', error);
        toast({
          title: "Error",
          description: "Failed to load contact submissions. You may not have admin access.",
          variant: "destructive",
        });
        return;
      }

      setContacts(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An error occurred while loading data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Signed out successfully",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact Submissions
                </CardTitle>
                <CardDescription>
                  View and manage contact form submissions (Admin Access)
                </CardDescription>
              </div>
              <Button onClick={handleSignOut} variant="outline">
                Sign Out
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No contact submissions yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Urgency</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDate(contact.created_at)}
                        </TableCell>
                        <TableCell className="font-medium">
                          {sanitizeHtml(contact.name)}
                        </TableCell>
                        <TableCell>{sanitizeHtml(contact.email)}</TableCell>
                        <TableCell>{contact.company ? sanitizeHtml(contact.company) : '-'}</TableCell>
                        <TableCell>{contact.phone ? sanitizeHtml(contact.phone) : '-'}</TableCell>
                        <TableCell>
                          {contact.service ? (
                            <Badge variant="secondary" className="text-xs">
                              {sanitizeHtml(contact.service)}
                            </Badge>
                          ) : '-'}
                        </TableCell>
                        <TableCell>{contact.budget ? sanitizeHtml(contact.budget) : '-'}</TableCell>
                        <TableCell>
                          {contact.urgency ? (
                            <Badge 
                              variant={
                                contact.urgency === 'immediate' ? 'destructive' :
                                contact.urgency === 'soon' ? 'default' : 'secondary'
                              }
                              className="text-xs"
                            >
                              {sanitizeHtml(contact.urgency)}
                            </Badge>
                          ) : '-'}
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="truncate" title={contact.message}>
                            {sanitizeHtml(contact.message)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
