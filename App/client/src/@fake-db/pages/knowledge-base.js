import mock from '../mock'

const data = {
  // knowledge base
  knowledgeBase: [
    {
      id: 1,
      category: 'sales-automation',
      img: require('@src/assets/images/illustration/sales.svg').default,
      title: 'Sales Automation',
      desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.'
    },
    {
      id: 2,
      category: 'marketing-automation',
      img: require('@src/assets/images/illustration/marketing.svg').default,
      title: 'Marketing Automation',
      desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.'
    },
    {
      id: 3,
      category: 'api-questions',
      img: require('@src/assets/images/illustration/api.svg').default,
      title: 'API Questions',
      desc: 'every hero and coward, every creator and destroyer of civilization.'
    },
    {
      id: 4,
      category: 'personalization',
      img: require('@src/assets/images/illustration/personalization.svg').default,
      title: 'Personalization',
      desc: 'It has been said that astronomy is a humbling and character experience.'
    },
    {
      id: 5,
      category: 'email-marketing',
      img: require('@src/assets/images/illustration/email.svg').default,
      title: 'Email Marketing',
      desc: 'There is perhaps no better demonstration of the folly of human conceits.'
    },
    {
      id: 6,
      category: 'demand-generation',
      img: require('@src/assets/images/illustration/demand.svg').default,
      title: 'Demand Generation',
      desc: 'Competent means we will never take anything for granted.'
    }
  ],
  categoryData: [
    {
      id: 0,
      title: 'Account Settings',
      icon: 'Settings',
      iconColor: 'text-primary',
      questions: [
        {
          id: 0,
          question: 'How Secure Is My Password?',
          slug: 'how-secure-is-my-password'
        },
        {
          id: 1,
          question: 'Can I Change My Username?',
          slug: 'can-i-change-my-username'
        },
        {
          id: 2,
          question: 'Where Can I Upload My Avatar?',
          slug: 'where-can-i-upload-my-avatar'
        },
        {
          id: 3,
          question: 'How Do I Change My Timezone?',
          slug: 'how-do-i-change-my-timezone'
        },
        {
          id: 4,
          question: 'How Do I Change My Password?',
          slug: 'how-do-i-change-my-password'
        }
      ]
    },
    {
      id: 1,
      title: 'API Questions',
      icon: 'Link',
      iconColor: 'text-success',
      questions: [
        {
          id: 0,
          question: 'Dessert halvah carrot cake sweet?',
          slug: 'dessert-halvah-carrot-cake-sweet'
        },
        {
          id: 1,
          question: 'Jelly beans bonbon marshmallow?',
          slug: 'jelly-beans-bonbon-marshmallow'
        },
        {
          id: 2,
          question: 'Marzipan chocolate gummi bears bonbon powder?',
          slug: 'marzipan-chocolate-gummi-bears-bonbon-powder'
        },
        {
          id: 3,
          question: 'Chupa chups lemon drops caramels?',
          slug: 'chupa-chups-lemon-drops-caramels'
        }
      ]
    },
    {
      id: 2,
      title: 'Billing',
      icon: 'FileText',
      iconColor: 'text-danger',
      questions: [
        {
          id: 0,
          question: 'Oat cake lemon drops sweet sweet?',
          slug: 'oat-cake-lemon-drops-sweet-sweet'
        },
        {
          id: 1,
          question: 'Cotton candy brownie ice cream wafer roll?',
          slug: 'cotton-candy-brownie-ice-cream-wafer-roll'
        },
        {
          id: 2,
          question: 'Chocolate bonbon cake sugar plum?',
          slug: 'chocolate-bonbon-cake-sugar-plum'
        },
        {
          id: 3,
          question: 'Cake fruitcake chupa chups?',
          slug: 'cake-fruitcake-chupa-chups'
        },
        {
          id: 4,
          question: 'Fruitcake bonbon dessert gingerbread powder?',
          slug: 'fruitcake-bonbon-dessert-gingerbread-powder'
        }
      ]
    },
    {
      id: 3,
      title: 'Copyright & Legal',
      icon: 'Lock',
      iconColor: 'text-warning',
      questions: [
        {
          id: 0,
          question: 'Marshmallow jelly beans oat cake?',
          slug: 'marshmallow-jelly-beans-oat-cake'
        },
        {
          id: 1,
          question: 'Cake ice cream jujubes cookie?',
          slug: 'cake-ice-cream-jujubes-cookie'
        },
        {
          id: 2,
          question: 'Sesame snaps tart cake pie chocolate?',
          slug: 'sesame-snaps-tart-cake-pie-chocolate'
        },
        {
          id: 3,
          question: 'Chocolate cake chocolate tootsi?',
          slug: 'chocolate-cake-chocolate-tootsi'
        },
        {
          id: 4,
          question: 'Caramels lemon drops tiramisu cake?',
          slug: 'caramels-lemon-drops-tiramisu-cake'
        },
        {
          id: 5,
          question: 'Brownie dessert gummies. Tiramisu bear claw apple?',
          slug: 'brownie-dessert-gummies-tiramisu-bear-claw-apple'
        }
      ]
    },
    {
      id: 4,
      title: 'Mobile Apps',
      icon: 'Smartphone',
      iconColor: 'text-info',
      questions: [
        {
          id: 0,
          question: 'Macaroon tootsie roll?',
          slug: 'macaroon-tootsie-roll'
        },
        {
          id: 1,
          question: 'Cheesecake sweet soufflé jelly tiramisu chocolate?',
          slug: 'cheesecake-sweet-soufflé-jelly-tiramisu-chocolate'
        },
        {
          id: 2,
          question: 'Carrot cake topping tiramisu oat?',
          slug: 'carrot-cake-topping-tiramisu-oat'
        },
        {
          id: 3,
          question: 'Ice cream soufflé marshmallow?',
          slug: 'ice-cream-soufflé-marshmallow'
        },
        {
          id: 4,
          question: 'Dragée liquorice dragée jelly beans?',
          slug: 'dragée-liquorice-dragée-jelly-beans'
        },
        {
          id: 5,
          question: 'Lemon drops gingerbread chupa chups tiramisu?',
          slug: 'lemon-drops-gingerbread-chupa-chups-tiramisu'
        }
      ]
    },
    {
      id: 5,
      title: 'Using KnowHow',
      icon: 'HelpCircle',
      iconColor: '',
      questions: [
        {
          id: 0,
          question: 'Brownie dessert gummies?',
          slug: 'brownie-dessert-gummies'
        },
        {
          id: 1,
          question: 'Cookie tiramisu lollipop?',
          slug: 'cookie-tiramisu-lollipop'
        },
        {
          id: 2,
          question: 'Bonbon sugar plum jelly-o?',
          slug: 'bonbon-sugar-plum-jelly-o'
        },
        {
          id: 3,
          question: 'Halvah chupa chups chupa chups?',
          slug: 'halvah-chupa-chups-chupa-chups'
        }
      ]
    }
  ],
  questionData: {
    title: 'Why Was My Developer Application Rejected?',
    lastUpdated: '10 Dec 2018',
    relatedQuestions: [
      {
        id: 0,
        question: 'Cake icing gummi bears?'
      },
      {
        id: 1,
        question: 'Jelly soufflé apple pie?'
      },
      {
        id: 2,
        question: 'Soufflé apple pie ice cream cotton?'
      },
      {
        id: 3,
        question: 'Powder wafer brownie?'
      },
      {
        id: 4,
        question: 'Toffee donut dragée cotton candy?'
      },
      {
        id: 5,
        question: 'Soufflé chupa chups chocolate bar?'
      }
    ],
    // ! Here we have used require for image source but in API it shall be URL of live image, this is just for demo purpose
    content: `<p>It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.</p><p class="ql-align-center"><img class="img-fluid w-100" src="${
      require('@src/assets/images/pages/kb-image.jpg').default
    }" /></p><h5>Houston</h5><p>that may have seemed like a very long final phase. The auto targeting was taking us right into a … crater, with a large number of big boulders and rocks … and it required …flying manually over the rock field to find a reasonably good area.</p><ul class="list-group list-group-circle ml-2 mt-2"><li class="list-group-item"><a class="text-body" href="/" rel="noopener noreferrer" >I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.</a></li><li class="list-group-item"><a class="text-body" href="/" rel="noopener noreferrer" >It’s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it’s hard to be articulate when your mind’s blown—but in a very good way.</a></li><li class="list-group-item"><a class="text-body" href="/" rel="noopener noreferrer" >A good rule for rocket experimenters to follow is this</a></li></ul>`
  }
}

mock.onGet('/faq/data/knowledge_base').reply(() => [200, data.knowledgeBase])
mock.onGet('/faq/data/category').reply(() => [200, data.categoryData])
mock.onGet('/faq/data/question').reply(() => [200, data.questionData])
