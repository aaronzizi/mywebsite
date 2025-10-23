import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Heart, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import aaronPhoto from "@/assets/aaron-zitoun.png";
import treatmentHands from "@/assets/treatment-hands.jpg";
import Seo from "@/components/Seo";
const Parcours = () => {
  const values = [{
    icon: Heart,
    title: "Écoute & Empathie",
    description: "Chaque patient est unique. Je prends le temps d'écouter vos besoins et vos attentes pour adapter mon traitement."
  }, {
    icon: Target,
    title: "Approche Globale",
    description: "Le corps est un tout interconnecté. Je recherche la cause profonde de vos douleurs, pas seulement le symptôme."
  }, {
    icon: Award,
    title: "Excellence & Rigueur",
    description: "Formation continue et techniques éprouvées pour vous garantir des soins de qualité optimale."
  }];
  return <div className="min-h-screen">
      <Seo
        title="Mon Parcours — Aaron Zitoun, Ostéopathe D.O."
        description="Vocation, valeurs et philosophie de soin au service de votre bien-être à Pantin."
        path="/parcours"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aaron Zitoun, la passion de l'ostéopathie
              <br />
              <span className="text-primary">au service de votre bien-être</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez mon parcours, ma formation et ma philosophie de soin
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img src={aaronPhoto} alt="Aaron Zitoun, ostéopathe diplômé D.O. à Pantin" className="rounded-2xl w-[80%] h-auto mx-auto" />
              
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ma Vocation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mon parcours vers l'ostéopathie n'a pas été le fruit du hasard. Dès mon adolescence, j'ai été fasciné
                  par la capacité du corps humain à s'adapter et à se régénérer. Cette curiosité, nourrie par une
                  pratique sportive régulière et quelques blessures qui m'ont conduit à consulter un ostéopathe, s'est
                  transformée en vocation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  J'ai découvert une approche thérapeutique qui allie rigueur scientifique et dimension humaine,
                  technique manuelle et écoute profonde. C'est cette combinaison unique qui m'a convaincu de consacrer
                  ma vie professionnelle à l'ostéopathie.
                </p>
              </div>
            </div>
          </div>

                {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Mes Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Ma Philosophie de Soin</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Mon approche thérapeutique repose sur les principes fondamentaux de l'ostéopathie, enrichis par ma
                propre expérience et ma vision du soin. Je crois profondément que{" "}
                <strong>le corps possède une intelligence innée</strong> et une capacité naturelle d'auto-guérison. Mon
                rôle en tant qu'ostéopathe est d'identifier et de lever les obstacles qui empêchent cette régulation
                optimale.
              </p>
              <p className="text-lg leading-relaxed">
                Chaque consultation est pour moi l'occasion d'établir un <strong>dialogue authentique</strong> avec mes
                patients. L'écoute attentive de vos symptômes, de votre histoire médicale, de votre mode de vie et de
                vos objectifs est la pierre angulaire de mon travail. Cette phase d'anamnèse me permet de comprendre
                votre situation dans sa globalité, au-delà du simple motif de consultation.
              </p>
              <p className="text-lg leading-relaxed">
                J'adopte une <strong>vision holistique du corps humain</strong>. Tout est lié : une douleur au genou
                peut avoir pour origine un déséquilibre postural, un mal de tête persistant peut résulter de tensions
                cervicales ou de troubles digestifs. C'est cette vision globale qui me guide dans mon diagnostic et dans
                le choix de mes techniques thérapeutiques.
              </p>
              <p className="text-lg leading-relaxed">
                Enfin, je m'engage à utiliser des <strong>techniques douces, précises et toujours adaptées</strong> à
                votre âge, votre morphologie et votre état de santé. Le confort et le respect de vos limites sont
                essentiels. Je privilégie une approche progressive, où chaque séance s'inscrit dans un parcours de soin
                cohérent et personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à débuter votre parcours de soin ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui et faites le premier pas vers un mieux-être durable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.doctolib.fr/osteopathe/pantin/aaron-zitoun" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Prendre RDV en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white">
                Contacter le cabinet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Parcours;