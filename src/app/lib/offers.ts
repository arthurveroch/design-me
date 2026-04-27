export type Offer = {
  name: string
  subtitle: string
  button_text: string

  arguments: {
    first_argument: string
    second_argument: string
    third_argument: string
    fourth_argument: string
    fifth_argument: string
    sixth_argument: string
  }
}

export const offers = [
  {
    name: 'Sites vitrine',
    subtitle: 'Sur demande',
    button_text: 'Sites vitrine',

    arguments: {
      first_argument: 'Design sur-mesure (maquettes Figma)',
      second_argument: 'SEO technique intégré',
      third_argument: 'Formulaire contact + RGPD',
      fourth_argument: 'Développement React/Next.js',
      fifth_argument: 'Responsive mobile-first',
      sixth_argument: "3 mois d'accompagnement",
    },
  },

  {
    name: 'Sites e-commerce',
    subtitle: 'Sur demande',
    button_text: 'Sites e-commerce',

    arguments: {
      first_argument: 'Catalogue produits illimité',
      second_argument: 'Gestion stocks & commandes',
      third_argument: "Tunnel d'achat optimisé",
      fourth_argument: 'Paiement sécurisé (Stripe, CB)',
      fifth_argument: 'SEO produit avancé',
      sixth_argument: 'Formation admin incluse',
    },
  },

  {
    name: 'SEO / SEA',
    subtitle: 'Sur demande',
    button_text: 'SEO ou SEA',

    arguments: {
      first_argument: 'Audit SEO complet',
      second_argument: 'Optimisation on-page',
      third_argument: 'Campagnes Google Ads',
      fourth_argument: 'Stratégie mots-clés locaux',
      fifth_argument: 'Netlinking qualifié',
      sixth_argument: 'Reporting mensuel',
    },
  },
]
