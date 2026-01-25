import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const documents = [
    {
        title: "Committees & Responsibilities",
        filename: "Committees & Responsibilities TAG-PC.pdf",
        path: "/Committees & Responsibilities TAG-PC.pdf"
    },
    {
        title: "Conference Schedule",
        filename: "TAG-PC Conference Schedule.pdf",
        path: "/TAG-PC Conference Schedule.pdf"
    },
    {
        title: "Inaugural Minute to Minute Program",
        filename: "TAG-PC Inaugural Minute to Minute Program.pdf",
        path: "/TAG-PC Inaugural Minute to Minute Program.pdf"
    }
];

const ImportantDocuments = () => {
    return (
        <section id="important-documents" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        Important Documents
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Access essential conference materials and schedules.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {documents.map((doc, index) => (
                        <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl text-primary flex items-center gap-2">
                                    <FileText className="h-6 w-6" />
                                    {doc.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="mt-auto pt-6">
                                <Button
                                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    onClick={() => window.open(doc.path, '_blank')}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantDocuments;
