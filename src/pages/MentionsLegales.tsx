const MentionsLegales = () => {
  return (
    <div className="min-h-screen section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">

            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <p><strong>Aaron Zitoun - Ostéopathe D.O.</strong></p>
              <p>11 Rue Etienne Marcel, 93500 Pantin</p>
              <p>Téléphone : 01 48 45 88 08</p>
              <p>Email : aaronzitoun12@gmail.com</p>
            </section>

            {/* Statut professionnel */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Statut professionnel</h2>
              <p>Ostéopathe diplômé D.O., profession réglementée conformément aux articles L.4321-1 et suivants du Code de la Santé Publique.</p>
              <p>Enregistré auprès de l’Agence Régionale de Santé (ARS) Île-de-France.</p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
              <p><strong>Vercel Inc.</strong></p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p>Site web : https://vercel.com</p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p>
                L’ensemble du contenu de ce site (textes, images, graphismes, logo, éléments multimédia) est la propriété exclusive d’Aaron Zitoun,
                sauf mention contraire. Toute reproduction, modification ou diffusion, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès,
                de rectification et de suppression des données vous concernant.
              </p>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante :  
                <br />
                <strong>contact@zitoun-osteopathe-pantin.fr</strong>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
