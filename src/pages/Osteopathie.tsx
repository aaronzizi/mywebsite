import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Dumbbell, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pregnantWoman from "@/assets/pregnant-woman.jpg";
import baby from "@/assets/baby.jpg";
import athlete from "@/assets/athlete.jpg";
import senior from "@/assets/senior.jpg";
import treatmentHands from "@/assets/treatment-hands.jpg";
import Seo from "@/components/Seo";

const Osteopathie = () => {
  const patientCategories = [
    {
      id: "adultes",
      icon: Users,
      title: "Adultes & Actifs",
      image: treatmentHands,
      motifs: [
        "Douleurs lombaires, dorsales et cervicales",
        "Maux de tête et migraines",
        "Troubles digestifs (ballonnements, constipation)",
        "Stress et tensions nerveuses",
        "Douleurs articulaires et musculaires",
        "Fatigue chronique",
        "Suivi postural (télétravail, posture assise prolongée)",
      ],
    },
    {
      id: "grossesse",
      icon: Heart,
      title: "Femmes Enceintes & Post-Partum",
      image: pregnantWoman,
      motifs: [
        "Douleurs lombaires et sciatiques",
        "Troubles circulatoires (jambes lourdes)",
        "Reflux gastro-œsophagien",
        "Troubles du sommeil",
        "Préparation à l'accouchement",
        "Récupération post-partum",
        "Rééquilibrage du bassin après l'accouchement",
      ],
    },
    {
      id: "nourrissons",
      icon: Baby,
      title: "Nourrissons & Enfants",
      image: baby,
      motifs: [
        "Coliques et régurgitations",
        "Troubles du sommeil",
        "Plagiocéphalie (tête plate)",
        "Torticolis congénital",
        "Difficultés de succion",
        "Agitation et pleurs excessifs",
        "Suivi après l'accouchement (forceps, ventouse, césarienne)",
      ],
    },
    {
      id: "sportifs",
      icon: Dumbbell,
      title: "Sportifs",
      image: athlete,
      motifs: [
        "Prévention des blessures",
        "Optimisation des performances",
        "Récupération après effort",
        "Tendinites et entorses",
        "Douleurs musculaires et articulaires",
        "Préparation à la compétition",
        "Suivi biomécanique et postural",
      ],
    },
    {
      id: "seniors",
      icon: Clock,
      title: "Seniors",
      image: senior,
      motifs: [
        "Douleurs arthrosiques",
        "Raideurs articulaires",
        "Perte de mobilité",
        "Troubles de l'équilibre",
        "Maintien de l'autonomie",
        "Amélioration de la qualité de vie",
        "Prévention des chutes",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="L'Ostéopathie — principes, bienfaits et pour qui ?"
        description="Comprendre l'ostéopathie, ses principes fondateurs, ses bienfaits et à qui elle s'adresse."
        path="/osteopathie"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              L'Ostéopathie Expliquée
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprendre l'ostéopathie, ses bienfaits et pour qui elle est adaptée
            </p>
          </div>
        </div>
      </section>

      {/* Définition Section */}
      <section className="section-p mb-14 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Qu'est-ce que l'ostéopathie ?</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                L'ostéopathie est une <strong>approche thérapeutique manuelle</strong> qui vise à diagnostiquer et
                traiter les restrictions de mobilité des tissus du corps humain pouvant altérer l'état de santé général.
                Elle repose sur une compréhension approfondie de l'anatomie, de la physiologie et de la biomécanique.
              </p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Les Principes Fondateurs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <p><strong>L'unité du corps :</strong> Le corps fonctionne comme un tout indissociable. Chaque structure
                        (os, muscle, organe) est interconnectée et influence le reste de l'organisme.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <p><strong>La capacité d'auto-guérison :</strong> Le corps possède des mécanismes naturels
                        d'autorégulation. L'ostéopathe aide à restaurer ces capacités en levant les blocages.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <p><strong>Structure et fonction :</strong> La structure gouverne la fonction et vice versa.
                        Une restriction de mobilité peut altérer le bon fonctionnement d'un organe ou d'un système.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <p className="text-lg leading-relaxed">
                L'ostéopathe est un <strong>praticien de première intention</strong>, ce qui signifie que vous pouvez
                le consulter directement, sans ordonnance médicale. Cependant, l'ostéopathie ne remplace pas la médecine
                conventionnelle : elle la complète en traitant les troubles fonctionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pour Qui Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Pour Qui ? Quand Consulter ?</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            L'ostéopathie s'adresse à tous les âges et tous les profils. Découvrez les motifs de consultation
            spécifiques à chaque catégorie de patients.
          </p>
          <div className="space-y-16">
            {patientCategories.map((category, index) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <Card className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`relative h-[400px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center pl-8">
                        <div className="text-white">
                          <category.icon className="h-12 w-12 mb-3" />
                          <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className={`p-8 flex flex-col justify-center min-h-[400px] ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                      <h4 className="font-semibold text-lg mb-4">Motifs de consultation :</h4>
                      <ul className="space-y-3">
                        {category.motifs.map((motif, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span>{motif}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Ostéopathie vs. Kinésithérapie : Comprendre la Différence
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Ces deux approches sont complémentaires mais distinctes. Voici un tableau comparatif pour mieux comprendre
              leurs spécificités.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-semibold">Critère</th>
                    <th className="p-4 text-left font-semibold">Ostéopathie</th>
                    <th className="p-4 text-left font-semibold">Kinésithérapie</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Approche</td>
                    <td className="p-4 text-muted-foreground">Globale et holistique du corps</td>
                    <td className="p-4 text-muted-foreground">Ciblée sur une zone spécifique</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Objectif</td>
                    <td className="p-4 text-muted-foreground">Rétablir la mobilité et l'équilibre général</td>
                    <td className="p-4 text-muted-foreground">Rééduquer un muscle, une articulation</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Techniques</td>
                    <td className="p-4 text-muted-foreground">Manipulations manuelles douces</td>
                    <td className="p-4 text-muted-foreground">Massages, exercices, électrothérapie</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Durée</td>
                    <td className="p-4 text-muted-foreground">Généralement 1 à 3 séances</td>
                    <td className="p-4 text-muted-foreground">Souvent plusieurs séances sur plusieurs semaines</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Prescription</td>
                    <td className="p-4 text-muted-foreground">Non nécessaire (praticien de 1ère intention)</td>
                    <td className="p-4 text-muted-foreground">Ordonnance médicale requise</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Remboursement</td>
                    <td className="p-4 text-muted-foreground">Par certaines mutuelles uniquement</td>
                    <td className="p-4 text-muted-foreground">Sécurité Sociale + mutuelle</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">Indications</td>
                    <td className="p-4 text-muted-foreground">Troubles fonctionnels, douleurs chroniques</td>
                    <td className="p-4 text-muted-foreground">Post-opératoire, traumatismes, rééducation motrice</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Card className="mt-8 bg-accent-light border-accent">
              <CardContent className="p-6">
                <p className="text-foreground font-medium">
                  ℹ️ <strong>Important :</strong> L'ostéopathie et la kinésithérapie ne sont pas concurrentes mais
                  <strong> complémentaires</strong>. Dans certains cas, votre ostéopathe peut vous orienter vers un
                  kinésithérapeute, et inversement, pour optimiser votre prise en charge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous vous reconnaissez ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            N'attendez plus pour prendre soin de vous. Prenez rendez-vous dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://www.doctolib.fr/osteopathe/pantin/aaron-zitoun" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Prendre RDV en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/seance">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white">
                Découvrir le déroulement d'une séance
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Osteopathie;
