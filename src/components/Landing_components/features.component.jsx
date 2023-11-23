import React from 'react';
import {ReactComponent as FreeMedicalInquirySVG} from '../../assets/landing-assets/free-medical-inquiry.svg';
import {ReactComponent as HeartFeaturesSVG} from '../../assets/landing-assets/heart-features.svg';
import {ReactComponent as MessagesSVG} from '../../assets/landing-assets/messages-icon-features.svg';
import {ReactComponent as FeatureColumnDivide} from '../../assets/landing-assets/feature-column-divide.svg';

const FeaturesComponent = () => {
  return (
    <section id='features' className='relative'>
        <div className='rounded-full bg-white absolute shadow-md w-[70%] z-10 -top-7 left-[12%]'>
            <div className='flex gap-x-5 box-border px-14 py-7'>
                <div className='text-center px-4'>
                    <div className='feature-icon flex justify-center'>
                        <FreeMedicalInquirySVG />
                    </div>
                    <h6 className='text-[#067A50] text-lg font-bold'>Free Medical Inquiry</h6>
                    <p className='font-normal text-sm text-[#090701]'>Take advantage of our free consultations for the first one month. No service or hidden charges.</p>
                </div>
                <div  className='mt-4'><FeatureColumnDivide /></div>
                <div className='text-center px-4'>
                    <div className='feature-icon flex justify-center'>
                        <HeartFeaturesSVG />
                    </div>
                    <h6 className='text-[#067A50] text-lg font-bold'>Qualified Medical Practitioners</h6>
                    <p className='font-normal text-sm text-[#090701]'>We are a safe community of Qualified Doctors and Nurses invested in keeping you  whole and healthy.  </p>
                </div>
                <div className='mt-4'><FeatureColumnDivide /></div>
                <div className='text-center px-4'>
                    <div className='feature-icon flex justify-center'>
                        <MessagesSVG />
                    </div>
                    <h6 className='text-[#067A50] text-lg font-bold'>24/7 Rapid Response</h6>
                    <p className='font-normal text-sm text-[#090701]'>Our AI integrated system has been synchronized to deliver correct and reliable medical info. to you 24/7.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesComponent;