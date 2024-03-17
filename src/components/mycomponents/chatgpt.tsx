/**

 * v0 by Vercel.
 * @see https://v0.dev/t/ZdF9zhV6Zlz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

export default function ChatGpt() {
    const prompt1=" Pros: \nFinancial protection for dependents: Life insurance provides a financial safety net for your loved ones in case of your untimely death. It can help replace lost income, pay off debts, cover living expenses, and fund future financial goals.\nPeace of mind: Knowing that your family will be financially secure even if you're no longer around can provide peace of mind.\nTax benefits: In many cases, the death benefit received by beneficiaries is not subject to federal income tax. \nFlexible options: Life insurance policies come in various types (e.g., term life, whole life, universal life) and can be customized to suit your specific needs and budget. \nCash value accumulation: Permanent life insurance policies (such as whole life and universal life) often have a cash value component that accumulates over time and can be accessed during your lifetime through withdrawals or loans.\nCons:\nCost: Depending on factors such as age, health, coverage amount, and type of policy, life insurance premiums can be expensive, especially for older individuals or those with pre-existing health conditions.\nComplexity: Understanding the different types of life insurance policies, their features, and how they work can be complex and overwhelming. \nPotential for policy lapse: If you fail to pay premiums on time, your life insurance policy may lapse, causing you to lose coverage and any accumulated cash value. \nLimited investment growth: While permanent life insurance policies offer a cash value component, the growth rate may be lower compared to other investment options. Additionally, fees and expenses associated with these policies can eat into the cash value. \nWaiting period for benefits: In some cases, there may be a waiting period (known as the contestability period) before the full death benefit is paid out, particularly for deaths due to suicide or other specific causes."
    const[prompt,setPrompt]=useState('');
    const[ans,setAns]=useState('');
    const [loading, setLoading] = useState(false);
    const generate=async()=>{
            try{
                setLoading(true); 
            console.log(prompt)
            let result= await fetch('http://localhost:3000/gem',{
                method:'post', 
                body:JSON.stringify({prompt}),
                headers:{
                    'Content-Type':'application/json'
                },
            });
            let resultData = await result.text();

            console.warn(resultData);
            setTimeout(()=>{setAns(prompt1)},1000)
            
            console.warn(ans);
            }catch(error){
                toast.error("Something went wrong")
            }finally {
                setLoading(false); 
            }
        
    }
    useEffect(() => {
        console.log("Ans:", ans);
    }, [ans]);
    


  return (
    <main className="min-h-screen flex flex-col items-center justify-center ml-40">
      <Card className="w-full max-w-3xl rounded-xl border">
        <CardHeader className="p-6 rounded-t-xl border-b">
          <div className="text-bold text-6xl font-bold font-sans tracking-tight text-gray-900">Easy AI</div>
          <div className="mt-20">Send a message or upload a file</div>
        </CardHeader>
        <CardContent className="  flex-col p-6 grid gap-4">
        <div className="flex text-left text-lg font-serif leading-relaxed">{loading ? "Loading..." : ans}</div>
          <div className="grid gap-2">
            <label
              className="flex items-center px-4 py-2 rounded-lg border border-dashed cursor-pointer bg-gray-50 dark:bg-gray-900"
              htmlFor="file-upload"
            >
              <FileIcon className="w-5 h-5 mr-1.5" />
              <span className="font-medium">Upload a file</span>
              <span className="ml-auto text-sm text-gray-500">PDF only</span>
              <input className="sr-only" id="file-upload" type="file" />
            </label>
          </div>
          <div className="grid gap-2">
           
            <Input className="h-10 text-sm" id="message" placeholder="Enter your message" onChange={(e)=>{setPrompt(e.target.value)}}/> 
            <Button onClick={generate}>Generate</Button>   
          </div>
          
        </CardContent>
      </Card>
    </main>
  )
}

function FileIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
