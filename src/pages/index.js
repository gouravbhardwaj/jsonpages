import Image from "next/image";
import Head from "next/head";
import { useState,useEffect } from "react";
import { FaAward, FaExternalLinkAlt, FaGraduationCap, FaLightbulb, FaRegUser, FaUserCircle } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import getContent from "../../controller/content";
import Footer from "./footer";

const theme = {
  primaryColor      : 'bg-blue-500',
  secondaryColor    : '',
  font              : '',
  fontSize          : '',
  textColor         : 'white',
  borderColor       : 'border-blue-500'
}

const styleObj = {
  backgroundColor   : `${theme.primaryColor}`,
  foregroundColor   : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900',
 
  headerTextStyle   : 'text-xl font-bold pb-4 flex gap-4',
  blockBorderColor  : `border-b-4 ${theme.borderColor} border-solid`,
  blockStyle        : '',
  buttonStyle       : `px-4 py-2 border-solid border-2 ${theme.borderColor} rounded-full`,
  buttonColor       : '',
  buttonTextColor   : 'text-white',
  buttonHoverColor  : '',
 

  freeText: {
    parentDivStyle    	: '',
    summaryStyle 	    : 'text-lg'
  },

  pills : {
    parentDivStyle  : 'flex flex-wrap',
    pillStyle       : `mt-2 h-8 text-lg text-white border-1 shadow-lg ${theme.primaryColor} rounded-xl p-1 text-lg font-medium px-2 mr-2`
  },

  urlLinks:{
    parentDivStyle  : '',
    urlLinkStyle    : ''
  },

  timeBound:{
    parentDivStyle    : 'text-lg',
    degreeCourseStyle : 'sm:flex gap-2 font-semibold text-xl',
    schoolInstituteStyle   : '',
    timeFrameStyle    : 'text-gray-500',
    summaryStyle : ''
  },

  listItems:{

  }
}
export default function Home() {
  const [data,setData] = useState();

  useEffect(()=>{
    let contentData = getContent();
    setData(contentData);
  },[]);
  return (
    <>
    <Head>
      <title>{data && data.seoDetails && data.seoDetails.siteTitle ? data.seoDetails.siteTitle : ''}</title>

      <meta name="description" content={data && data.seoDetails && data.seoDetails.siteMetaDescription ? data.seoDetails.siteMetaDescription : ''}/> 

      <meta property="og:title" content={data && data.seoDetails && data.seoDetails.siteTitle ? data.seoDetails.siteTitle : ''}/>
      <meta property="og:description" content={data && data.seoDetails && data.seoDetails.siteMetaDescription ? data.seoDetails.siteMetaDescription : ''}/>
      <meta property="og:image" content={data && data.profileImage ? data.profileImage : ''}/>
      <meta property="og:url" content={data && data.websiteUrl ? data.websiteUrl : ''}/>


      <meta name="twitter:card" content={data && data.profileImage ? data.profileImage : ''}/>
      <meta name="twitter:title" content={data && data.seoDetails && data.seoDetails.siteTitle ? data.seoDetails.siteTitle : ''}/>
      <meta name="twitter:description" content={data && data.seoDetails && data.seoDetails.siteMetaDescription ? data.seoDetails.siteMetaDescription : ''}/>
      <meta name="twitter:image" content={data && data.profileImage ? data.profileImage : ''}/>



    </Head>

   
   <div className={`${styleObj.backgroundColor} pt-0 lg:pt-20`}>
        <main className={`container mx-auto ${styleObj.foregroundColor} sm:rounded-2xl`}>
    
          {
                  data ? 
                    <>
                      {/*Top navigation */}
                      <div className=' @xs/home:text-sm sm:mt-4 flex justify-center sm:justify-start gap-4 py-10 px-10'>
                          <div className={`name text-white text-3xl p-2 text-center w-14 h-14 font-bold ${styleObj.backgroundColor} rounded-full`}>
                              {data.firstName ? data.firstName.charAt(0):'' }
                          </div>
                          <div className='text-white text-xl font-bold mt-2 typewriter'>
                              {data.firstName && data.lastName ? data.firstName +' '+ data.lastName:'' }
                          </div>
                      </div>
                      {/*Top navigation Ends*/}

                      {/*Image and intro section */}
                      <div className='sm:flex sm:justify-center sm:py-20  sm:gap-20'>
                          <div className='sm:col-span-3  flex justify-center block justify-center'>
                              {
                                data.profileImage ? 
                                      <div className='w-32 h-32 sm:w-72 sm:h-72 bg-no-repeat rounded-full bg-center bg-cover' style={{backgroundImage:`url(${data.profileImage})`}}>

                                      </div>
                                    
                                  : 
                                  <div className='bg-slate-600 w-20 h-20 rounded-full flex justify-center pt-4'>
                                    <FaRegUser /> 
                                    {/*<AvatarIcon width="50px" height="50px" color="#adb6c2" style={{position:'absolute',bottom:'0px'}}/>*/}
                                  </div>
                              }
                          </div>

                          <div className='col-span-3 text-white mt-4'>
                              {/*<div className='text-base text-slate-400 text-center text-2xl sm:text-2xl sm:text-left mt-4 sm:mt-0'>{sectionList.employeeRole}</div>*/}
                              <div className='font-semibold text-lg sm:text-5xl text-center  sm:text-left sm:mt-4'>
                                  {data.firstName && data.lastName ? data.firstName +' '+ data.lastName:'' }
                                  
                              </div>
                              <div className="pt-2 text-center">
                                {data.shortDetail ? data.shortDetail : ''}
                              </div>

                              <div className='flex justify-center sm:justify-between gap-2 mt-4'>
                                    {
                                      data.getInTouch ?
                                        <button className={styleObj.buttonStyle}>Get In Touch</button>
                                      :
                                        ''

                                    }
                                    
                                    {data.openForJob ?

                                      <div className="flex gap-2">
                                        <FaTag /> <div>Hire Me</div>
                                        {/*<Tag color={styleObj.iconColor}></Tag> <div>Hire Me</div>*/}
                                      </div>
                                      :
                                        ''
                                    }
                                   
                              </div>
                              
                          </div>
                      </div>
                      {/*Image and intro section */}
                      </>
                      :
                      ''
                }

            {/* Skills */}
            <div className="pt-4 p-10 text-white">
                        
                        {
                            data && data.skills ?
                                <>
                                        
                                         
                                        <div className={` ${styleObj.headerTextStyle} ${styleObj.blockBorderColor}`}>
                                          <FaLightbulb />
                                          Skills
                                        </div>
                                       
                                        <div className=" mt-4">
                                            

                                            <div className={`mt-4 ${styleObj.pills.parentDivStyle}`}>
                                               
                                                {
                                                    data.skills ? 
                                                    data.skills.map((value,index)=>(
                                                        <div className={styleObj.pills.pillStyle} key={index} >
                                                            {value}
                                                        </div>
                                                    ))
                                                    //w-10 inline 
                                                    :
                                                    ''
                                                }
                                                
                                            </div>
                                        </div>
                                </>
                            :

                            ''
                        }
                      
            </div>
            {/* Skills */}


            {/*Education*/}
            <div className='pt-4 p-10 text-white'>
            {
                data && data.education ?
                    <>
                         <div className={` ${styleObj.headerTextStyle} ${styleObj.blockBorderColor}`}>
                            <FaGraduationCap />
                            Education
                          </div>

                            <div className='mt-4'>
                                    <div className={`${styleObj.timeBound.parentDivStyle}`}>
                                            {
                                            data.education ?
                                              data.education.map((val,index)=>(
                                                    <div key={index} className={`${styleObj.blockStyle}`}>
                                                        <div className={`${styleObj.timeBound.degreeCourseStyle}`}>
                                                            <div>{val.school ? val.school+', ' : ''} </div>
                                                            <div>{val.degree}</div>
                                                        </div>

                                                        <div className={`${styleObj.timeBound.timeFrameStyle}`}>
                                                            {val.startDate ? monthYearFromDate(val.startDate)+' -' : ''}  {val.endDate ? monthYearFromDate(val.endDate) : ''}
                                                        </div>

                                                        {/*
                                                        <div className={`${styleObj.timeBound.summaryStyle}`}>
                                                            {val.summary ? <div dangerouslySetInnerHTML={{__html: val.summary}}/>: ''}    
                                                        </div>
                                                        */}
                                                    </div>
                                                ))
                                                
                                            :
                                                ''
                                            }
                                    </div>
                            </div>
                    </>
                :

                ''
            }
           
          </div>
          {/*Education*/}

          {/*Employment*/}
          <div className='pt-4 p-10 text-white'>
            {
                data && data.employment ?
                    <>
                         <div className={` ${styleObj.headerTextStyle} ${styleObj.blockBorderColor}`}>
                            <BsBriefcaseFill /> 
                            Employment
                          </div>

                            <div className='mt-4'>
                                    <div className={`${styleObj.timeBound.parentDivStyle}`}>
                                            {
                                            data.employment ?
                                              data.employment.map((val,index)=>(
                                                    <div key={index} className={`${styleObj.blockStyle}`}>
                                                        <div className={`${styleObj.timeBound.degreeCourseStyle}`}>
                                                            <div>{val.companyName ? val.companyName+', ' : ''} </div>
                                                            <div>{val.jobTitle}</div>
                                                        </div>

                                                        <div className={`${styleObj.timeBound.timeFrameStyle}`}>
                                                            {val.startDate ? monthYearFromDate(val.startDate)+' -' : ''}  {val.endDate ? monthYearFromDate(val.endDate) : ''}
                                                        </div>

                                                        {/*
                                                        <div className={`${styleObj.timeBound.summaryStyle}`}>
                                                            {val.summary ? <div dangerouslySetInnerHTML={{__html: val.summary}}/>: ''}    
                                                        </div>
                                                        */}
                                                    </div>
                                                ))
                                                
                                            :
                                                ''
                                            }
                                    </div>
                            </div>
                    </>
                :

                ''
            }
           
          </div>
          {/*Employment*/}

          {/*Summary*/}
          <div className='sm:pt-4 p-10 text-white'>
            {
                data ?
                    <>
                        <div className={` ${styleObj.headerTextStyle ? styleObj.headerTextStyle : ''} ${styleObj.blockBorderColor}`}>
                          <FaUserCircle />
                          Summary
                        </div>
            
                        <div className='mt-4'>
                                <div className={styleObj.freeText.summaryStyle}>
                                    <div>{data.summary.heading}</div>
                                    <ul className="list-disc pl-10">
                                    {
                                      data.summary.items ?
                                      data.summary.items.map((val,index)=>(
                                        <li key={index}>
                                            {val}
                                        </li>
                                      ))
                                      :
                                        ''
                                    }
                                    </ul>
                                   
                                </div>
                        </div>
                    </>
                :
                ''
            }
            
          </div>
          {/*Summary*/}

          {/*Social*/}
          <div className='pt-4 p-10 text-white'>

            {
                data ?
                    <>
                        <div className={` ${styleObj.headerTextStyle} ${styleObj.blockBorderColor}`}>
                          <FaExternalLinkAlt /> 
                          Social
                        </div>

                        <div className='mt-4'>
                                <div className='text-lg'>
                                        {
                                            data.social ?
                                            data.social.map((val,index)=>(
                                                <div key={index} className="mt-2">
                                                    <a target="_blank" rel="noreferrer" href={val.url}>{val.name}</a>
                                                </div>
                                            ))
                                                
                                            :
                                            ''
                                        }
                                </div>
                        </div>
                    </>
                :   

                ''
            }
            
           
          </div>
          {/*Social*/}

           {/*Awards*/}
           <div className='pt-4 p-10 text-white'>

            {
                data ?
                    <>
                        <div className={` ${styleObj.headerTextStyle} ${styleObj.blockBorderColor}`}>
                          <FaAward />
                          Awards
                        </div>

                        <div className='mt-4'>
                                <div className='text-lg'>
                                        {
                                            data.awards ?
                                            data.awards.map((val,index)=>(
                                                <div key={index} className="mt-2">
                                                    {val}
                                                </div>
                                            ))
                                                
                                            :
                                            ''
                                        }
                                </div>
                        </div>
                    </>
                :   

                ''
            }


            </div>
            {/*Awards*/}

             {/*Certificates*/}
          <div className='pt-4 p-10 text-white'>

          {
              data ?
                  <>
                      <div className={` ${styleObj.headerTextStyle} ${styleObj.blockBorderColor}`}>
                        <PiCertificateBold />
                        Certificates
                      </div>

                      <div className='mt-4'>
                              <div className='text-lg'>
                                      {
                                          data.certificates ?
                                          data.certificates.map((val,index)=>(
                                            <div key={index} className="mt-2">
                                                {val}
                                            </div>
                                          ))
                                              
                                          :
                                          ''
                                      }
                              </div>
                      </div>
                  </>
              :   

              ''
          }


          </div>
          {/*Certificates*/}

          
      </main>
      <Footer></Footer>
   </div>
   </>
  );
}
