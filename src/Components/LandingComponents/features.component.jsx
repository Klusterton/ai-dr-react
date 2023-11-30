import React from 'react';
import { ReactComponent as FreeMedicalInquirySVG } from '../../Assets/LandingAssets/free-medical-inquiry.svg';
import { ReactComponent as HeartFeaturesSVG } from '../../Assets/LandingAssets/heart-features.svg';
import { ReactComponent as MessagesSVG } from '../../Assets/LandingAssets/messages-icon-features.svg';
import { ReactComponent as FeatureColumnDivide } from '../../Assets/LandingAssets/feature-column-divide.svg';

const FeaturesComponent = () => {
    return (
        <section id='features' className='relative'>
            <div className='bg-white w-full z-10 -top-7 left-[12%] mids:absolute mids:shadow-md mids:rounded-full mids:w-[80%]'>
                <div className='flex justify-center mb-10 mt-20 mids:hidden'>
                    <h2 className='text-4xl font-bold text-[#067A50] underline'>Our Features</h2>
                </div>
                <div className='flex flex-col gap-x-5 box-border px-14 pb-20 mids:py-5 phone:flex-row'>
                    <div className='text-center px-4 mids:px-2'>
                        <div className='feature-icon flex justify-center'>
                            <FreeMedicalInquirySVG />
                        </div>
                        <h6 className='text-[#067A50] text-lg font-bold'>Free Medical Inquiry</h6>
                        <p className='font-normal text-sm text-[#090701]'>Take advantage of our free consultations for the first one month. No service or hidden charges.</p>
                    </div>
                    <div className='mt-4 hidden mids:block'><FeatureColumnDivide /></div>
                    <div className='text-center px-4 mids:px-2'>
                        <div className='feature-icon flex justify-center'>
                            <HeartFeaturesSVG />
                        </div>
                        <h6 className='text-[#067A50] text-lg font-bold'>Qualified Medical Practitioners</h6>
                        <p className='font-normal text-sm text-[#090701]'>We are a safe community of Qualified Doctors and Nurses invested in keeping you  whole and healthy.  </p>
                    </div>
                    <div className='mt-4 hidden mids:block'><FeatureColumnDivide /></div>
                    <div className='text-center px-4 mids:px-2'>
                        <div className='feature-icon flex justify-center'>
                            <MessagesSVG />
                        </div>
                        <h6 className='text-[#067A50] text-lg font-bold'>24/7 Rapid Response</h6>
                        <p className='font-normal text-sm text-[#090701]'>Our AI integrated system has been synchronized to deliver correct and reliable medical info. to you 24/7.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesComponent;
