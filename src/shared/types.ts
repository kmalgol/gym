export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
  }

export type NavbarProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
}

export type BenefitProps = BenefitType & {
  setSelectedPage: (value: SelectedPage) => void
}
