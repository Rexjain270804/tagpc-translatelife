import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Ashok K. Chauhan",
      title: "Chief Patron",
      designation: "Hon'ble Founder President, Ritnand Balved Education Foundation (RBEF), Amity Education Group",
      image: "/speakers/ashok_chauhan.png"
    },
    {
      name: "Dr. Aseem Chauhan",
      title: "Chief Patron",
      designation: "Chancellor, Amity University Rajasthan",
      image: "/speakers/aseem_chauhan.png"
    },
    {
      name: "Prof. (Dr.) Amit Jain",
      title: "Patron",
      designation: "President/ Vice Chancellor, Amity University Rajasthan",
      image: "/speakers/amit_jain.png"
    },
    {
      name: "Prof. (Dr.) G. K. Aseri",
      title: "Patron",
      designation: "Pro-President / Pro Vice Chancellor, Amity University Rajasthan",
      image: "/speakers/gk_aseri.png"
    },
    {
      name: "Prof. (Dr.) Dipa Chakrabarti",
      title: "Conference Director & Convenor",
      designation: "HOI, Amity School of Languages (ASL), Amity University Rajasthan",
      image: "https://i.ibb.co/jk4m9zqX/Prof-Dipa-Chakrabarti-Chairperson-of-the-Conference.jpg"
    },
    {
      name: "Dr. Manoj Kumar",
      title: "Coordinator",
      designation: "Assistant Professor, Amity School of Languages, Amity University Rajasthan",
      image: "https://i.ibb.co/KzcX3Qy1/Dr-Manoj-Kumar-Coordinator-of-the-Conference.jpg"
    },
    {
      name: "Dr. Parul Mishra",
      title: "Coordinator",
      designation: "Professor, Amity School of Languages, Amity University Rajasthan",
      image: "/speakers/Prof Parul Mishra Coordinator of the Conference.jpeg"
    },
    {
      name: "Prof. Sheila Rai",
      title: "Chief Guest",
      designation: "Council Member ICSSR, New Delhi. Professor (Retd.), Department of Political Science, University of Rajasthan",
      image: "/speakers/sheila_rai.png"
    },
   {
      name: "Prof. Panchanan Mohanty",
      title: "Guest of Honour/Keynote/Plenary Speaker",
      designation: "Council Member ICSSR, New Delhi. Professor (Retd.), Center of Applied Linguistics and Translation studies, Maulana Azad National Urdu University and Malaviya National Institute of Technology",
      image: "/speakers/panchanan_mohanty.png"
    },
    {
      name: "Prof. Udai Narayan Singh",
      title: "Guest of Honour/Keynote/Plenary Speaker",
      designation: "Chair Professor & Head, ACLiS, Amity University Gurgaon. Former Chair Professor, Rabindra Bhavana, Visva-Bharati, Santiniketan",
      image: "https://i.ibb.co/qvtdr7V/Prof-Uday-narayan-singh.jpg"
    },
    {
      name: "Prof. Radha Chakravarty",
      title: "Guest of Honour/Keynote/Plenary Speaker",
      designation: "Former Professor of Comparative Literature and Translation Studies, Ambedkar University Delhi",
      image: "/speakers/radha_chakravarty.png"
    },
    {
      name: "Prof. Vridhagiri Ganeshan",
      title: "Guest of Honour/Keynote/Plenary Speaker",
      designation: "Emeritus Professor of German, Peachtree Corners, Georgia, United States",
      image: "/speakers/vridhagiri_ganeshan.png"
    },
    {
      name: "Prof. Chartier Fabien",
      title: "Guest of Honour/Keynote/Plenary Speaker",
      designation: "Teacher of English and French, Rennes University France",
      image: "/speakers/chartier_fabien.png"
    },
    {
      name: "Mr. Pinak Ranjan Chakravarty ",
      title: "Chief Guest",
      designation: "Former Secretary, Ministry of External Affairs; Founding Director, DeepStrat.",
      image: "/speakers/Pinak Ranjan Sir.jpg"
    },
    {
      name: "Prof. Ari Gautier",
      title: "Invited Speaker",
      designation: "French Writer and Poet, Oslo",
      image: "https://i.ibb.co/gLLRCcJy/Prof-Ari-Gautier.webp"
    },
    {
      name: "Prof. Hemendra Chandalia",
      title: "Invited Speaker",
      designation: "Professor of English, Janardan Rai Nagar Rajasthan Vidyapeeth (University) Udaipur",
      image: "/speakers/hemendra_chandalia.png"
    },
    {
      name: "Prof. Nibir K. Ghosh, D.Litt.",
      title: "Invited Speaker",
      designation: "UGC Emeritus Professor, Department of English Studies & Research, Agra College, Agra",
      image: "/speakers/nibir_ghosh.png"
    },
    {
      name: "Prof. Sunita Rani",
      title: "Invited Speaker",
      designation: "Department of Hindi, Agra College, Agra. Visiting Scholar University of Washington, Seattle, USA",
      image: "/speakers/sunita_rani.png"
    },
    {
      name: "Prof. Nilanjan Chakrabarti",
      title: "Invited Speaker",
      designation: "Professor of French, Centre for Modern European Languages, Literatures and Culture Studies, Visva-Bharati, Santiniketan",
      image: "/speakers/nilanjan_chakrabarti.png"
    },
    {
      name: "Dr. Shrikrishna Jugnu",
      title: "Invited Speaker",
      designation: "Translator, Poet, Writer",
      image: "https://i.ibb.co/JjNGtVLn/Dr-Shri-Krishna-Jugnu.webp"
    },
    {
      name: "Prof. Yukteshwar Kumar",
      title: "Invited Speaker",
      designation: "Senior Academic of the University of Bath, Specialising in Chinese and China. Former Deputy Mayor of Bath",
      image: "https://i.ibb.co/DDjBPgsn/VS.jpg"
    },
    {
      name: "Ms. Roopam Singh",
      title: "Invited Speaker",
      designation: "Editor, Translator, Writer",
      image: "/speakers/roopam_singh.png"
    }
  ];

  const chiefPatrons = speakers.filter(s => s.title === "Chief Patron");
  const patrons = speakers.filter(s => s.title === "Patron");
  const directors = speakers.filter(s => s.title === "Conference Director & Convenor");
  const coordinators = speakers.filter(s => s.title === "Coordinator");
  const keynotes = speakers.filter(s => s.title === "Guest of Honour/Keynote/Plenary Speaker");
  const invited = speakers.filter(s => s.title === "Invited Speaker");
  const chiefGuest = speakers.filter(s => s.title === "Chief Guest");

  const renderSpeakerCard = (speaker: any, index: number) => (
    <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 h-full">
      <CardContent className="p-6 text-center">
        <div className="mb-6">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
          />
        </div>
        <h4 className="text-lg font-bold text-foreground mb-2">{speaker.name}</h4>
        <p className="text-primary font-semibold mb-3 text-sm">{speaker.title}</p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{speaker.designation}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Distinguished Speakers & Committee
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries and experts leading TAG-PC 2026
          </p>
        </div>

        {/* Chief Patrons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Chief Patrons</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefPatrons.map(renderSpeakerCard)}
          </div>
        </div>

        {/* Patrons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Patrons</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {patrons.map(renderSpeakerCard)}
          </div>
        </div>

        {/* Director & Convenor */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Conference Director & Convenor</h3>
          <div className="max-w-md mx-auto">
            {directors.map(renderSpeakerCard)}
          </div>
        </div>

        {/* Coordinators */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Coordinators</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map(renderSpeakerCard)}
          </div>
        </div>
        {/* Chief Guest */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Chief Guest</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefGuest.map(renderSpeakerCard)}
          </div>
        </div>
        {/* Keynote Speakers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Guest of Honour / Keynote / Plenary Speakers</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {keynotes.map((speaker, index) => (
              <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
                {renderSpeakerCard(speaker, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Invited Speakers */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Invited Speakers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {invited.map(renderSpeakerCard)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpeakersSection;
