export interface IHeader {
  id: "1";
  title: "Why GPE?";
  url: "/why-gpe";
  SubMenu: "true";
  SubTitle: [
    {
      id: "1";
      title: "Our brand";
      url: "/why-gpe/our-brand";
    },
    {
      id: "2";
      title: "Our customers";
      url: "/why-gpe/Our customers";
    },
    {
      id: "3";
      title: "Awards & recognition";
      url: "/why-gpe/awards-recognition";
    },
    {
      id: "4";
      title: "Our service approach";
      url: "/why-gpe/our-service-approach";
    }
  ];
}

export interface IImageboxContent {
  id: "1";
  img: "https://www.gpe.co.uk/media/saspo3yk/alfies_groundfloor_mainarea_01.jpg?width=1920&v=1daf8a185955370";
}

export interface IImagebox {
  image: IImageboxContent[];
}

export interface IWalfred {
  id: "1";
  title: "Thirty One Alfred Place";
  paragraph: "A workplace embracing everyday wellness. Offering a wide range of workspaces from 10–80 desks and exclusive on floor amenities.";
  text: "Discover";
  url: "portfolio/thirty-one-alfred-place";
}

export interface IPower {
  _id: "66e2bacd3608770523bdfc21";
  id: "1";
  paragraph: "We unlock potential, creating sustainable space for London to thrive.We believe in the power of innovation and partnership to deliver a greater choice of adaptable, climate resilient places fit for London's future, creating space for every London story.";
  data: [
    {
      id: "1";
      img: "https://www.gpe.co.uk/media/5hlhm1km/vb1938916_reception_teapoint.jpg?width=500&height=500&v=1d8bd163a9f2cb0";
      title: "Ready to Fit";
      text: "Step into a brand-new office space that’s ready for you to design, build and manage, just how you want it.";
      url: "portfolio/ready-to-fit";
    },
    {
      id: "2";
      img: "https://www.gpe.co.uk/media/5hlhm1km/vb1938916_reception_teapoint.jpg?width=500&height=500&v=1d8bd163a9f2cb0";
      title: "Ready to Fit";
      text: "Step into a brand-new office space that’s ready for you to design, build and manage, just how you want it.";
      url: "portfolio/ready-to-fit";
    },
    {
      id: "3";
      img: "https://www.gpe.co.uk/media/5hlhm1km/vb1938916_reception_teapoint.jpg?width=500&height=500&v=1d8bd163a9f2cb0";
      title: "Ready to Fit";
      text: "Step into a brand-new office space that’s ready for you to design, build and manage, just how you want it.";
      url: "portfolio/ready-to-fit";
    }
  ];
}

export interface IFeature {
  _id: "66e33b0b3608770523bdfc24";
  id: "1";
  img: "https://www.gpe.co.uk/media/fclik1ll/gpe_6sas_grou…0498468393&width=500&height=500&v=1dad8ef0dd00190";
  title: "Farringdon";
  text: "SIX";
  slug: "Fully Managed";
  url: "/portfolio/six";
}

export interface IOffer {
  _id: "66e34a453608770523bdfc2b";
  id: "1";
  title: "Why GPE?";
  button: "Discover what we have to offer";
  url: "/why-gpe";
  data: [
    {
      id: "1";
      title: "Greater Choice";
      paragraph: "We unlock the potential for thriving, sustainable communities to experience great choice in London's most exceptional places.";
      img: "https://www.gpe.co.uk/media/cg1jmvmn/wellsmore-courtyard.jpg?width=200&height=200&v=1d8b61b41ba4bd0";
    }
  ];
}

export interface IBrief {
  id: "1";
  img: "https://www.gpe.co.uk/media/xgfj0hd5/2as-cgi.jpg?width=427&height=427&v=1d98343a4cdab90";
  title: "Our Brief for Creating Sustainable Spaces";
  url: "/media/epbd2egq/our-brief-for-creating-sustainable-spaces.pdf";
}

export interface ILatest {
  id: "1";
  title: "Latest news";
  button: "view more";
  url: "/news-media";
  data: [
    {
      id: "1";
      img: "https://www.gpe.co.uk/media/opudw553/4234_greys-inn-road_int_atrium_cam004-final.jpg?width=265&height=265&v=1dac8a9f86d6cc0";
      url: "/news-media/news/2024/gpe-s-director-of-digital-technology-jordan-mclean-reshapes-team-to-deliver-new-strategy";
      text: "GPE’s Director of Digital & Technology, Jordan Mclean, reshapes team";
      slug: "news";
      date: "Monday, 8 July 2024";
    }
  ];
}

export interface IData {
  id: string;
  title: string;
  button: string;
  url: string;
  data: [
    {
      id: string;
      img: any;
      text: string;
      button: string;
    }
  ];
}
