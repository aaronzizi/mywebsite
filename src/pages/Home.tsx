import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Baby, Heart, Users, Dumbbell, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroCabinet from "@/assets/photo-cabinet.jpg";
import aaronPhoto from "@/assets/aaron-zitoun.png";
import pregnantWoman from "@/assets/pregnant-woman.jpg";
import baby from "@/assets/baby.jpg";
import athlete from "@/assets/athlete.jpg";
import senior from "@/assets/senior.jpg";
import Seo from "@/components/Seo";

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!testimonialApi) return;

    setCurrentTestimonial(testimonialApi.selectedScrollSnap());

    testimonialApi.on("select", () => {
      setCurrentTestimonial(testimonialApi.selectedScrollSnap());
    });
  }, [testimonialApi]);

  const patientTypes = [
    {
      icon: Baby,
      title: "Nourrissons",
      description: "Suivi doux dès les premières semaines",
      image: baby,
      link: "/osteopathie#nourrissons",
    },
    {
      icon: Heart,
      title: "Femmes Enceintes",
      description: "Accompagnement pendant la grossesse",
      image: pregnantWoman,
      link: "/osteopathie#grossesse",
    },
    {
      icon: Dumbbell,
      title: "Sportifs",
      description: "Performance et prévention des blessures",
      image: athlete,
      link: "/osteopathie#sportifs",
    },
    {
      icon: Users,
      title: "Adultes",
      description: "Soulagement des douleurs du quotidien",
      image: heroCabinet,
      link: "/osteopathie#adultes",
    },
    {
      icon: Clock,
      title: "Seniors",
      description: "Maintien de la mobilité et de l'autonomie",
      image: senior,
      link: "/osteopathie#seniors",
    },
  ];

  const testimonials = [
    {
      text: "Aaron est un ostéopathe exceptionnel. Ses mains expertes ont soulagé mes douleurs de dos chroniques en quelques séances. Je recommande vivement !",
      author: "Marie L.",
      location: "Pantin",
    },
    {
      text: "Excellent suivi pendant ma grossesse. Aaron a su me soulager avec des techniques douces et adaptées. Je me suis sentie écoutée et en confiance.",
      author: "Sophie D.",
      location: "Le Pré-Saint-Gervais",
    },
    {
      text: "En tant que sportif, j'ai trouvé en Aaron un vrai partenaire pour optimiser mes performances et prévenir les blessures. Professionnel et à l'écoute.",
      author: "Thomas R.",
      location: "Les Lilas",
    },
    {
      text: "Mon bébé avait des troubles du sommeil et des coliques. Après quelques séances, tout est rentré dans l'ordre. Merci Aaron pour ta douceur et ton professionnalisme.",
      author: "Julie M.",
      location: "Pantin",
    },
    {
      text: "J'avais des douleurs cervicales persistantes depuis des années. Aaron a su identifier la cause et me soulager durablement. Un grand merci !",
      author: "Pierre B.",
      location: "Romainville",
    },
    {
      text: "Accompagnement parfait pour mes douleurs lombaires liées au travail sur ordinateur. Aaron donne aussi de précieux conseils pour prévenir les récidives.",
      author: "Léa F.",
      location: "Bagnolet",
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Ostéopathe D.O. à Pantin – Aaron Zitoun"
        description="Soulagement des douleurs, suivi grossesse, nourrissons, sportifs. Prise de RDV en ligne au 11 Rue Etienne Marcel, Pantin."
        path="/"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Aaron Zitoun – Ostéopathe D.O.",
          image: (import.meta.env.VITE_OG_IMAGE as string),
          url: (import.meta.env.VITE_SITE_URL as string),
          telephone: "+33148458808",
          address: {
            "@type": "PostalAddress",
            streetAddress: "11 Rue Etienne Marcel",
            addressLocality: "Pantin",
            postalCode: "93500",
            addressCountry: "FR",
          },
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: "Monday" }],
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/20 rounded-full text-sm font-medium text-primary border border-primary/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                Ostéopathe D.O.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aaron Zitoun,
                <br />
                <span className="text-primary">Ostéopathe D.O.</span>
                <br />à Pantin
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Votre partenaire pour soulager vos douleurs et retrouver un équilibre durable. Consultation sur
                rendez-vous au cabinet ou à domicile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.doctolib.fr/osteopathe/pantin/aaron-zitoun" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg">
                    Prendre RDV en ligne
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:0148458808">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg">
                    Appeler le cabinet
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                📍 11 Rue Etienne Marcel, 93500 Pantin • ☎️ 01 48 45 88 08
              </p>
            </div>
            <div className="relative">
              <img
                src={heroCabinet}
                alt="Cabinet d'ostéopathie moderne et accueillant à Pantin"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-semibold text-primary mb-1">Diplômé de l'EOP Paris</p>
                <p className="text-sm text-muted-foreground">
                  Formation complète de 5 ans agréée par le Ministère de la Santé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour Qui Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pour Qui ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'ostéopathie s'adresse à tous, du nourrisson au senior, pour soulager et prévenir les douleurs du
              quotidien.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {patientTypes.slice(0, 3).map((type, index) => (
                  <CarouselItem key={index}>
                    <Link to={type.link}>
                      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={type.image}
                            alt={type.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <type.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {type.title}
                          </h3>
                          <p className="text-muted-foreground">{type.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {patientTypes.slice(0, 3).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Aller à la slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {patientTypes.slice(0, 3).map((type, index) => (
              <Link key={index} to={type.link}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Voir plus button */}
          <div className="flex justify-center mt-8">
            <Link to="/osteopathie">
              <Button size="lg" variant="outline" className="group">
                Voir plus
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mon Approche Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aaronPhoto}
                alt="Aaron Zitoun, ostéopathe diplômé D.O."
                className="rounded-2xl w-[80%] h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Mon Approche</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  En tant qu'ostéopathe diplômé D.O., ma mission est de vous accompagner vers un mieux-être durable en
                  identifiant et traitant les causes profondes de vos douleurs, et non uniquement les symptômes.
                </p>
                <p className="text-lg leading-relaxed">
                  Mon approche repose sur trois piliers fondamentaux : <strong>l'écoute attentive</strong> de vos
                  besoins, une <strong>vision globale</strong> du corps humain où tout est interconnecté, et
                  l'utilisation de <strong>techniques douces et adaptées</strong> à chaque patient.
                </p>
                <p className="text-lg leading-relaxed">
                  Je crois profondément que chaque corps possède une capacité naturelle d'auto-guérison. Mon rôle est de
                  lever les blocages et restrictions qui empêchent cette régulation optimale, en respectant toujours
                  votre confort et vos limites.
                </p>
              </div>
              <Link to="/parcours">
                <Button size="lg" variant="outline" className="group mt-8">
                  Découvrir mon parcours
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La confiance de mes patients est ma plus belle récompense
            </p>
          </div>
          <Carousel
            setApi={setTestimonialApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/10">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-6 text-lg">"{testimonial.text}"</p>
                      <div className="border-t pt-4">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => testimonialApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Localisation Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Localisation & Accès</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cabinet facilement accessible au cœur de Pantin
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                    <p className="text-muted-foreground">11 Rue Etienne Marcel, 93500 Pantin</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                    <a href="tel:0148458808" className="text-primary hover:underline">
                      01 48 45 88 08
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi : 9h00 - 19h00</p>
                      <p>Samedi : 9h00 - 13h00</p>
                      <p className="text-sm italic mt-2">Sur rendez-vous uniquement</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Accès</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>🚇 Métro : Église de Pantin (ligne 5)</p>
                      <p>🚌 Bus : Lignes 61, 249</p>
                      <p>🚗 Stationnement possible à proximité</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.0957!2d2.4042!3d48.8959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c4f!2s11+Rue+Etienne+Marcel%2C+93500+Pantin!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre soin de vous ?</h2>
          <p className="text-xl mb-8 opacity-90">Prenez rendez-vous en ligne ou contactez le cabinet directement</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.doctolib.fr/osteopathe/pantin/aaron-zitoun" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg">
                Prendre RDV en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="tel:0148458808">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg bg-white/10 hover:bg-white/20 border-white text-white"
              >
                01 48 45 88 08
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
