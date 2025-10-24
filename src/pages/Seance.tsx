import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Search, Stethoscope, Lightbulb, Clock, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import treatmentHands from "@/assets/treatment-hands.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/components/Seo";

const Seance = () => {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "L'Anamnèse : Le Dialogue",
      duration: "15-20 minutes",
      description:
        "La séance commence toujours par un temps d'échange approfondi. Je vous pose des questions détaillées pour comprendre votre motif de consultation, vos antécédents médicaux et chirurgicaux, votre mode de vie (activité professionnelle, pratique sportive, habitudes posturales), et vos objectifs thérapeutiques.",
      importance:
        "Cette phase est cruciale : elle me permet de situer votre douleur dans un contexte global et d'identifier d'éventuelles contre-indications à certaines techniques.",
    },
    {
      number: 2,
      icon: Search,
      title: "L'Examen Clinique : L'Observation",
      duration: "10-15 minutes",
      description:
        "Après l'entretien, je procède à un examen physique complet. Vous serez en sous-vêtements ou en tenue souple (legging, short) pour permettre une observation optimale de votre posture et de vos mouvements. J'évalue votre équilibre postural, votre mobilité articulaire et réalise des tests palpatoires pour identifier les zones de tension et de restriction.",
      importance:
        "Cette étape me permet de poser un diagnostic ostéopathique précis et de déterminer les structures à traiter en priorité.",
    },
    {
      number: 3,
      icon: Stethoscope,
      title: "Le Traitement : Les Soins",
      duration: "20-30 minutes",
      description:
        "Je procède ensuite au traitement ostéopathique proprement dit. J'utilise diverses techniques manuelles adaptées à votre cas : manipulations structurelles (le fameux \"craquement\", utilisé uniquement si nécessaire et avec votre accord), techniques fonctionnelles douces, techniques viscérales ou crâniennes. Toutes mes interventions sont précises, contrôlées et toujours respectueuses de votre confort.",
      importance:
        "Chaque technique est choisie en fonction de votre âge, de votre morphologie et de votre tolérance. L'objectif est de restaurer la mobilité des tissus et de relancer les processus naturels d'autorégulation du corps.",
    },
    {
      number: 4,
      icon: Lightbulb,
      title: "Les Conseils : L'Accompagnement",
      duration: "5-10 minutes",
      description:
        "La séance se termine par des conseils personnalisés pour prolonger les bienfaits du traitement et prévenir les récidives. Je vous recommande des postures à adopter, des étirements ou exercices simples à réaliser chez vous, et des ajustements de votre hygiène de vie si nécessaire (hydratation, gestion du stress, ergonomie du poste de travail).",
      importance:
        "Votre implication active dans votre parcours de soin est essentielle pour des résultats durables.",
    },
  ];

  const practicalInfos = [
    {
      icon: Clock,
      title: "Durée de la séance",
      content: "Une séance complète dure 45  minutes. Ce temps permet un traitement complet et personnalisé.",
    },
    {
      icon: Info,
      title: "Tenue recommandée",
      content: "Prévoyez des vêtements confortables et souples (legging, short, débardeur) ou des sous-vêtements dans lesquels vous vous sentez à l'aise. L'examen se fait en sous-vêtements pour une évaluation optimale de votre posture.",
    },
    {
      icon: Info,
      title: "Après la séance",
      content: "Il est fréquent de ressentir une légère fatigue ou des courbatures dans les 24 à 72 heures suivant la séance. Ces réactions sont normales : elles témoignent du travail d'adaptation de votre corps. Elles disparaissent généralement rapidement.",
    },
    {
      icon: Info,
      title: "Recommandations post-séance",
      content: "Buvez suffisamment d'eau dans les jours suivant la consultation. Évitez les efforts physiques intenses pendant 48 heures pour laisser votre corps intégrer les changements. Le repos est votre allié !",
    },
  ];

  const faqs = [
    {
      question: "L'ostéopathie fait-elle obligatoirement \"craquer\" ?",
      answer:
        "Non, absolument pas. Le \"craquement\" (manipulation structurelle) n'est qu'une technique parmi d'autres. Il existe de nombreuses approches douces et tout aussi efficaces (techniques fonctionnelles, viscérales, crâniennes). Les manipulations structurelles ne sont utilisées que si nécessaire, adaptées à votre cas, et toujours avec votre accord éclairé.",
    },
    {
      question: "Est-ce douloureux ?",
      answer:
        "Les techniques ostéopathiques ne sont pas douloureuses. Vous pouvez ressentir une légère pression ou un inconfort passager lors de certaines manipulations, mais jamais de douleur intense. Je m'adapte toujours à votre seuil de tolérance et je reste à votre écoute tout au long de la séance.",
    },
    {
      question: "Combien de séances sont nécessaires ?",
      answer:
        "Cela dépend de votre motif de consultation et de votre réactivité au traitement. Pour un problème aigu récent, 1 à 2 séances suffisent souvent. Pour une douleur chronique installée depuis longtemps, un suivi de 3 à 4 séances espacées de quelques semaines peut être nécessaire. Je vous donne toujours une estimation lors de la première consultation.",
    },
    {
      question: "Puis-je venir avec mes examens médicaux ?",
      answer:
        "Oui, c'est même recommandé ! Si vous avez des radiographies, IRM, scanners ou bilans sanguins récents, n'hésitez pas à les apporter. Ces documents m'aident à affiner mon diagnostic et à adapter mon traitement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Déroulement d'une séance d'ostéopathie"
        description="Les 4 étapes clés de la consultation, informations pratiques et FAQ pour préparer votre visite."
        path="/seance"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Déroulement de votre séance
              <br />
              <span className="text-primary">d'ostéopathie à Pantin</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez comment se déroule une consultation et préparez-vous sereinement à votre première visite
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Les 4 Étapes Clés de la Consultation
          </h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-[auto_1fr] gap-0">
                  <div className="bg-primary text-white p-8 flex flex-col items-center justify-center lg:min-w-[200px]">
                    <div className="text-6xl font-bold mb-4 opacity-50">{step.number}</div>
                    <step.icon className="h-16 w-16 mb-4" />
                    <div className="text-center">
                      <div className="font-semibold text-sm opacity-90">{step.duration}</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <div className="bg-accent-light p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-sm">
                        <strong className="text-accent-foreground">Pourquoi c'est important :</strong>{" "}
                        {step.importance}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Practical Infos Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Informations Pratiques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {practicalInfos.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Questions Fréquentes</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">D'autres questions ?</p>
              <Link to="/faq">
                <Button variant="outline" size="lg">
                  Consulter la FAQ complète
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour votre première séance ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Réservez votre consultation dès maintenant et commencez votre parcours vers le bien-être
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.doctolib.fr/osteopathe/pantin/aaron-zitoun" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Prendre RDV en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="tel:0148458808">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white">
                01 48 45 88 08
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seance;
