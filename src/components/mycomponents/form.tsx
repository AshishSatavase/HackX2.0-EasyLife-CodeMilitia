
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast ,ToastContainer} from "react-toastify";

export default function Form() {
  const [name,setName]=useState('');

  return (
    <>

    <ToastContainer/>
       <div className="w-100 mx-auto p-6 bg-white rounded-lg shadow-md border-b">
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <fieldset>
          <legend className="text-lg font-semibold mb-4">Personal Information</legend>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-row space-y-1 items-center">
              <label className="text-sm ml-5 font-medium text-left w-40 " htmlFor="fullName">
                Full Name:
              </label>
              <Input id="fullName" placeholder="John Doe" onChange={(e)=>{setName(e.target.value);
              console.log(name)}} />
            </div>
            <div className="flex flex-row items-center  space-y-1">
              <label className="text-sm font-medium w-40" htmlFor="email">
                Email Address
              </label>
              <Input id="email" placeholder="john.doe@example.com" type="email"  />
            </div>
            <div className="flex flex-row space-y-1 items-center">
              <label className="text-sm font-medium w-40" htmlFor="phoneNumber">
                Phone Number
              </label>
              <Input id="phoneNumber" placeholder="(555) 123-4567" />
            </div>
            <div className="flex flex-row space-y-1 items-center space-x-3">
              <label className="text-sm font-medium pl-5 pr-3" htmlFor="dateOfBirth" >
                Date of Birth
              </label>
              <Input id="dateOfBirth" type="date" className="w-40" />
            </div>
            <div className="flex flex-row items-center space-y-1">
              <label className="text-sm font-medium w-40" htmlFor="address">
                Address
              </label>
              <Input id="address" placeholder="1234 Main St, Anytown, USA" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold mb-4 space-y-4 mb-10">Medical History</legend>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-left font-medium mb-3" htmlFor="medicalConditions">
                Do you currently have any medical conditions or illnesses?
              </label>
              <div className="flex flex-col">
              <div className="flex items-center space-x-4 ">
                <input className="form-radio " id="medicalConditionsYes" name="medicalConditions" type="radio" />
                <label className="text-sm font-medium" htmlFor="medicalConditionsYes">
                  Yes
                </label>
                <input className="form-radio" id="medicalConditionsNo" name="medicalConditions" type="radio" />
                <label className="text-sm font-medium" htmlFor="medicalConditionsNo">
                  No
                </label>
                <div className="w-full">
                <textarea
                  className="w-full p-2 border rounded-md"
                  id="medicalConditionsDetails"
                  placeholder="List any medical conditions or illnesses here"
                />
                </div>
                
              </div>
              </div>
              
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-left mb-3" htmlFor="surgeries">
                Have you had any surgeries or hospitalizations in the past [timeframe]?
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="surgeriesYes" name="surgeries" type="radio" />
                <label className="text-sm font-medium" htmlFor="surgeriesYes">
                  Yes
                </label>
                <input className="form-radio" id="surgeriesNo" name="surgeries" type="radio" />
                <label className="text-sm font-medium" htmlFor="surgeriesNo">
                  No
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  id="surgeriesDetails"
                  placeholder="List any surgeries or hospitalizations here"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-3" htmlFor="medications">
                Are you currently taking any prescription medications? If yes, please list them.
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="medicationsYes" name="medications" type="radio" />
                <label className="text-sm font-medium" htmlFor="medicationsYes">
                  Yes
                </label>
                <input className="form-radio" id="medicationsNo" name="medications" type="radio" />
                <label className="text-sm font-medium" htmlFor="medicationsNo">
                  No
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  id="medicationsDetails"
                  placeholder="List any prescription medications here"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-3" htmlFor="chronicConditions">
                Have you ever been diagnosed with or treated for any chronic conditions?
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="chronicConditionsYes" name="chronicConditions" type="radio" />
                <label className="text-sm font-medium" htmlFor="chronicConditionsYes">
                  Yes
                </label>
                <input className="form-radio" id="chronicConditionsNo" name="chronicConditions" type="radio" />
                <label className="text-sm font-medium" htmlFor="chronicConditionsNo">
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-3" htmlFor="familyConditions">
                Have any of your immediate family members been diagnosed with serious medical conditions?
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="familyConditionsYes" name="familyConditions" type="radio" />
                <label className="text-sm font-medium" htmlFor="familyConditionsYes">
                  Yes
                </label>
                <input className="form-radio" id="familyConditionsNo" name="familyConditions" type="radio" />
                <label className="text-sm font-medium" htmlFor="familyConditionsNo">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold mb-4">Lifestyle and Habits</legend>
          <div className="flex flex-col space-y-4  mb-6">
            <div className="flex flex-row items-center  space-y-1 justify-between mb-5">
              <label className="text-sm font-medium " htmlFor="tobaccoUse">
                Do you smoke cigarettes or use any other tobacco products? If yes, how often?
              </label>
              <div className="flex self-center  space-x-4">
                <select className="form-select" id="tobaccoUse">
                  <option value="never">Never</option>
                  <option value="rarely">Rarely</option>
                  <option value="moderately">Moderately</option>
                  <option value="frequently">Frequently</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-between space-y-1 mb-7">
              <label className="text-sm font-medium" htmlFor="alcoholConsumption">
                How often do you consume alcoholic beverages?
              </label>
              <div className="flex items-center space-x-4">
                <select className="form-select" id="alcoholConsumption">
                  <option value="never">Never</option>
                  <option value="rarely">Rarely</option>
                  <option value="moderately">Moderately</option>
                  <option value="frequently">Frequently</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row space-y-1 justify-between">
              <label className="text-sm font-medium" htmlFor="highRiskActivities">
                Do you engage in any high-risk activities or sports that could result in injury?
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="highRiskActivitiesYes" name="highRiskActivities" type="radio" />
                <label className="text-sm font-medium" htmlFor="highRiskActivitiesYes">
                  Yes
                </label>
                <input className="form-radio" id="highRiskActivitiesNo" name="highRiskActivities" type="radio" />
                <label className="text-sm font-medium" htmlFor="highRiskActivitiesNo">
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left " htmlFor="occupation">
                What is your occupation, and are you exposed to any occupational hazards or risks?
              </label>
              <Input id="occupation" className="h-20" placeholder="Your Occupation" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold mb-4 " >Travel and Insurance Details</legend>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left" htmlFor="internationalTravel">
                Have you traveled internationally in the past? If yes, please list the countries visited.
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="internationalTravelYes" name="internationalTravel" type="radio" />
                <label className="text-sm font-medium" htmlFor="internationalTravelYes">
                  Yes
                </label>
                <input className="form-radio" id="internationalTravelNo" name="internationalTravel" type="radio" />
                <label className="text-sm font-medium" htmlFor="internationalTravelNo">
                  No
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  id="internationalTravelDetails"
                  placeholder="List countries visited"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-4" htmlFor="pregnancy">
                Are you currently pregnant or planning to become pregnant during the policy period?
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="pregnancyYes" name="pregnancy" type="radio" />
                <label className="text-sm font-medium" htmlFor="pregnancyYes">
                  Yes
                </label>
                <input className="form-radio" id="pregnancyNo" name="pregnancy" type="radio" />
                <label className="text-sm font-medium" htmlFor="pregnancyNo">
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-4" htmlFor="medicalInsurance">
                Do you currently have any other medical insurance coverage?
              </label>
              <div className="flex items-center space-x-4">
                <input className="form-radio" id="medicalInsuranceYes" name="medicalInsurance" type="radio" />
                <label className="text-sm font-medium" htmlFor="medicalInsuranceYes">
                  Yes
                </label>
                <input className="form-radio" id="medicalInsuranceNo" name="medicalInsurance" type="radio" />
                <label className="text-sm font-medium" htmlFor="medicalInsuranceNo">
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-4" htmlFor="insurancePreferences">
                What coverage preferences do you have for your medical insurance policy?
              </label>
              <Input id="insurancePreferences" placeholder="Your Coverage Preferences" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-semibold mb-4">Additional Information</legend>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-left mb-4" htmlFor="healthFactors">
                Are there any other health-related factors or concerns you would like to disclose?
              </label>
              <textarea
                className="w-full p-2 border rounded-md text-left mb-4"
                id="healthFactorsDetails"
                placeholder="Enter health-related factors or concerns"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="additionalComments">
                Is there anything else you would like to add or clarify about your medical history or lifestyle habits?
              </label>
              <textarea
                className="w-full p-2 border rounded-md "
                id="additionalCommentsDetails"
                placeholder="Add any additional comments or clarifications"
              />
            </div>
          </div>
        </fieldset>
        <Button className="w-full" onClick={(e)=>{toast.success("Self declaration Complete")}}>Submit</Button>
      </form>
    </div>
    </>
   
  )
}

