import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      category: "La Consultation",
      questions: [
        {
          q: "Faut-il une ordonnance d'un médecin pour consulter un ostéopathe ?",
          a: "Non, l'ostéopathe est un praticien de première intention. Vous pouvez le consulter directement sans ordonnance médicale. Cependant, si vous avez des examens médicaux récents (radiographies, IRM), n'hésitez pas à les apporter : ils m'aideront à affiner mon diagnostic.",
        },
        {
          q: "Combien de séances sont nécessaires en général ?",
          a: "Cela dépend de votre motif de consultation, de l'ancienneté de la douleur et de votre réactivité au traitement. Pour un problème aigu récent (torticolis, lumbago), 1 à 2 séances suffisent souvent. Pour une douleur chronique installée depuis plusieurs mois ou années, un suivi de 3 à 4 séances espacées de 2 à 3 semaines peut être nécessaire. Je vous donnerai une estimation dès la première consultation.",
        },
        {
          q: "Combien de temps faut-il attendre entre deux séances ?",
          a: "La fréquence des séances est adaptée à chaque patient. En général, je recommande d'espacer les consultations de 2 à 4 semaines pour laisser au corps le temps d'intégrer les changements et de s'autoréguler. Dans certains cas aigus, deux séances rapprochées peuvent être nécessaires. Je vous guide toujours sur le meilleur timing.",
        },
        {
          q: "L'ostéopathie fait-elle obligatoirement \"craquer\" ?",
          a: "Non, absolument pas. Le \"craquement\" audible (manipulation structurelle) n'est qu'une technique parmi de nombreuses autres. J'utilise également des approches douces et tout aussi efficaces : techniques fonctionnelles, viscérales, crâniennes, fasciales. Les manipulations structurelles ne sont utilisées que si elles sont adaptées à votre cas, et toujours avec votre accord explicite.",
        },
        {
          q: "Que dois-je apporter à ma première consultation ?",
          a: "Prévoyez une tenue confortable (legging, short) ou des sous-vêtements dans lesquels vous vous sentez à l'aise. Si vous avez des examens médicaux récents (radiographies, IRM, bilans), apportez-les. Pensez également à votre carte de mutuelle pour obtenir les informations nécessaires à votre facture de remboursement.",
        },
      ],
    },
    {
      category: "Champs d'Application",
      questions: [
        {
          q: "Peut-on consulter un ostéopathe en étant enceinte ?",
          a: "Oui, non seulement c'est possible, mais c'est même fortement recommandé ! L'ostéopathie est une approche douce et sans danger pendant la grossesse. Elle permet de soulager les maux fréquents (sciatiques, lombalgies, troubles digestifs, fatigue), de préparer le corps à l'accouchement et d'accompagner la récupération post-partum. J'adapte toutes mes techniques aux femmes enceintes.",
        },
        {
          q: "À partir de quel âge peut-on amener un bébé chez l'ostéopathe ?",
          a: "Dès les premières semaines de vie, et même dans les premiers jours après la naissance. Un bilan ostéopathique précoce est particulièrement recommandé après un accouchement difficile (long travail, forceps, ventouse, césarienne) ou si le bébé présente des troubles (coliques, reflux, difficultés de succion, tête plate, torticolis). Les techniques utilisées pour les nourrissons sont extrêmement douces et adaptées.",
        },
        {
          q: "L'ostéopathie peut-elle tout soigner ?",
          a: "Non, l'ostéopathie a ses limites. Elle traite les troubles fonctionnels (douleurs musculo-squelettiques, troubles digestifs, migraines, etc.), mais elle ne soigne pas les maladies organiques, infectieuses, génétiques ou les pathologies nécessitant une chirurgie (fracture, cancer, infection grave). En revanche, elle peut soulager certains symptômes de ces pathologies et accompagner le traitement médical. En cas de doute, je vous oriente vers le professionnel de santé approprié.",
        },
        {
          q: "L'ostéopathie peut-elle aider en cas de stress ou d'anxiété ?",
          a: "Oui, l'ostéopathie peut être une aide précieuse. Le stress et l'anxiété génèrent des tensions musculaires, des blocages respiratoires et des déséquilibres du système nerveux autonome. En libérant ces tensions et en rééquilibrant le corps, l'ostéopathie favorise la détente et contribue à mieux gérer le stress. Cependant, en cas d'anxiété sévère ou de dépression, un suivi psychologique reste essentiel.",
        },
        {
          q: "Peut-on consulter un ostéopathe pour des problèmes digestifs ?",
          a: "Oui. L'ostéopathie viscérale peut aider en cas de ballonnements, constipation, troubles du transit, reflux gastro-œsophagien (RGO) ou syndrome de l'intestin irritable. En travaillant sur la mobilité des organes, le diaphragme et les zones de tension abdominale, je peux améliorer le confort digestif. Si vos troubles persistent, un avis médical est indispensable pour écarter une pathologie organique.",
        },
      ],
    },
    {
      category: "Après la Séance",
      questions: [
        {
          q: "Quels sont les effets ressentis après une séance d'ostéopathie ?",
          a: "Il est fréquent de ressentir une sensation de fatigue, de légères courbatures ou des douleurs diffuses dans les 24 à 48 heures suivant la séance. Ces réactions sont normales et témoignent du travail d'adaptation de votre corps. Elles disparaissent généralement rapidement. À l'inverse, certains patients ressentent un soulagement immédiat et une grande légèreté. Chaque organisme réagit différemment.",
        },
        {
          q: "Peut-on faire du sport après une consultation ?",
          a: "Il est conseillé d'éviter les efforts physiques intenses pendant 48 heures après la séance pour laisser au corps le temps d'intégrer les changements. Privilégiez des activités douces (marche, étirements légers). Vous pourrez reprendre votre activité sportive normale après ce délai. En cas de préparation sportive spécifique, je vous donnerai des recommandations adaptées.",
        },
        {
          q: "Dois-je me reposer après la séance ?",
          a: "Il n'est pas nécessaire de rester alité, mais il est important d'être à l'écoute de votre corps. Si vous ressentez de la fatigue, accordez-vous un temps de repos. Buvez suffisamment d'eau dans les jours suivants pour faciliter l'élimination des toxines. Évitez le stress intense et les postures contraignantes.",
        },
        {
          q: "Quand vais-je ressentir les bienfaits de la séance ?",
          a: "Cela varie selon les patients. Certains ressentent un soulagement immédiat, d'autres après 48 à 72 heures, le temps que le corps s'adapte. Pour les douleurs chroniques, l'amélioration peut être progressive et s'installer sur plusieurs jours ou semaines. La patience est essentielle.",
        },
      ],
    },
    {
      category: "Administratif & Remboursement",
      questions: [
        {
          q: "Un ostéopathe peut-il délivrer un arrêt de travail ?",
          a: "Non, seuls les médecins sont habilités à délivrer des arrêts de travail. En revanche, si votre état le nécessite, je peux vous conseiller de consulter votre médecin traitant qui pourra, si besoin, vous prescrire un arrêt.",
        },
        {
          q: "Comment se faire rembourser par sa mutuelle ?",
          a: "À la fin de chaque séance, je vous remets une facture nominative détaillée. Il vous suffit de la transmettre à votre mutuelle (par courrier, email ou via leur application) pour obtenir votre remboursement, selon les modalités prévues par votre contrat. Le délai de remboursement varie selon les mutuelles (de quelques jours à quelques semaines).",
        },
        {
          q: "Combien coûte une séance ?",
          a: "Une consultation adulte coûte 70€ et une consultation pour nourrisson ou enfant 65€. Ce tarif inclut l'anamnèse, l'examen clinique, le traitement et les conseils personnalisés. La durée de la consultation est d'environ 45 à 60 minutes.",
        },
        {
          q: "Puis-je annuler ou déplacer mon rendez-vous ?",
          a: "Oui, mais je vous demande de le faire au moins 24 heures à l'avance par téléphone ou via Doctolib. Cela me permet de proposer ce créneau à d'autres patients. En cas d'annulation tardive (moins de 24h) ou d'absence non justifiée, la séance pourra être facturée.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-muted-foreground">
              Toutes les réponses à vos questions sur l'ostéopathie et le déroulement des consultations
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-16">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-2">
                    <span className="text-primary font-medium">Thème {sectionIndex + 1}</span>
                  </div>
                  <h2 className="text-3xl font-bold">{section.category}</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${sectionIndex}-${index}`} className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow">
                      <AccordionTrigger className="text-left font-semibold text-lg md:text-xl text-primary hover:no-underline py-6">
                        <span className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                            Q
                          </span>
                          <span className="flex-1">{item.q}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="ml-11 text-muted-foreground leading-relaxed pb-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            N'hésitez pas à me contacter directement. Je serai ravi de répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Contacter le cabinet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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

export default FAQ;
