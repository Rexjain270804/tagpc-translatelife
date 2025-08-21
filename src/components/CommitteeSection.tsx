import { Mail, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCommitteeMembers } from '@/hooks/useWebsiteContent';

const CommitteeSection = () => {
  const { data: committeeMembers } = useCommitteeMembers();

  return (
    <section id="committee" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Organizing Committee
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated team organizing this prestigious conference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {committeeMembers?.map((member) => (
            <Card key={member.id} className="border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                {member.bio && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                )}
                {member.email && (
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{member.email}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;