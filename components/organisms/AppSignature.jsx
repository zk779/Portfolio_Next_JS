import AppSection from '../molecules/AppSection';

const AppSignature = () => (
  <AppSection decoration={false}>
    <div className="text-center">
      <p className="text-gray text-xs md:text-sm">
        warm greetings from
      </p>
      <h3 className="font-signature text-xl md:text-3xl inline-block py-1 mt-3 md:mt-6 border-b border-primary">
        Zeeshan Khalid
      </h3>
    </div>
  </AppSection>
);

export default AppSignature;
