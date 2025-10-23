import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, CreditCard, Banknote, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Tarifs = () => {
  const mutuellesExamples = [
    "Allianz", "April", "Axa", "MAAF", "MMA", "MGEN",
    "Harmonie Mutuelle", "Malakoff Humanis", "Swiss Life",
    "AG2R La Mondiale", "Groupama", "Matmut"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Honoraires et Remboursement
              <br />
              <span className="text-primary">de votre consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparence totale sur les tarifs et les possibilités de prise en charge
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tarifs des Consultations</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-primary">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Euro className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Adulte</h3>
                  <div className="text-5xl font-bold text-primary mb-4">70€</div>
                  <p className="text-muted-foreground">
                    Consultation complète d'environ 45-60 minutes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Euro className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nourrisson / Enfant</h3>
                  <div className="text-5xl font-bold text-accent mb-4">65€</div>
                  <p className="text-muted-foreground">
                    Consultation adaptée aux plus jeunes
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-secondary/30 border-none">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Moyens de Paiement Acceptés
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Carte Bancaire</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Chèque</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Espèces</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Le règlement s'effectue à la fin de chaque séance. Une facture vous sera remise pour votre mutuelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Remboursement Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Prise en Charge par les Mutuelles
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-destructive" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sécurité Sociale</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Les consultations d'ostéopathie <strong>ne sont pas remboursées par la Sécurité Sociale</strong>.
                        L'ostéopathie n'est pas reconnue comme une profession médicale conventionnée, bien qu'elle soit
                        une discipline de santé réglementée et encadrée.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">Mutuelles & Complémentaires Santé</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        <strong>Excellente nouvelle :</strong> Face à la demande croissante et à l'efficacité reconnue
                        de l'ostéopathie, de <strong>très nombreuses mutuelles</strong> proposent désormais un remboursement
                        partiel ou total des séances d'ostéopathie, dans la limite d'un certain nombre de consultations par an.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Le remboursement varie généralement entre <strong>20€ et 60€ par séance</strong>, selon votre contrat,
                        avec une moyenne de 3 à 5 séances remboursées par an.
                      </p>
                      
                      <div className="bg-background p-6 rounded-lg mt-6">
                        <h4 className="font-semibold mb-3">Comment obtenir votre remboursement ?</h4>
                        <ol className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
                            <span>À la fin de votre séance, je vous remets une <strong>facture nominative</strong> détaillée.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
                            <span>Transmettez cette facture à votre mutuelle (par courrier, email ou via leur application).</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</div>
                            <span>Votre mutuelle procède au remboursement selon les modalités prévues dans votre contrat.</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">
                    Exemples de mutuelles partenaires (liste non exhaustive)
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {mutuellesExamples.map((mutuelle, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{mutuelle}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent-light p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-accent-foreground">
                      <strong>💡 Conseil :</strong> Pour connaître le montant exact et le nombre de séances prises en charge,
                      je vous recommande de <strong>contacter directement votre mutuelle</strong> avant votre première
                      consultation. Vous pouvez leur demander : "Mon contrat prend-il en charge les consultations d'ostéopathie
                      et à quelle hauteur ?"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Politique d'Annulation</h2>
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Je comprends que les imprévus font partie de la vie. Cependant, pour assurer un service de qualité
                    à tous mes patients, je vous demande de respecter la politique suivante :
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <Banknote className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        Toute annulation ou modification de rendez-vous doit se faire <strong>au moins 24 heures à l'avance</strong>
                        par téléphone ou via Doctolib.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Banknote className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        En cas d'annulation tardive (moins de 24h) ou d'absence non justifiée, la séance pourra être facturée.
                      </span>
                    </li>
                  </ul>
                  <p className="leading-relaxed italic">
                    Cette mesure permet de libérer des créneaux pour d'autres patients qui en ont besoin. Merci de votre compréhension.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Une question sur les tarifs ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute information complémentaire
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
    </div>
  );
};

export default Tarifs;
