import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function VideoCallComp() {
    const { roomId } = useParams();
    
    const myMeeting = async (element: HTMLElement) => {
        const appID = 926094129;
        const serverSecret = "7f3bf25f4d45d1b636719ad7b8107c83";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            "328",
            Date.now().toString(),
            "Name"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true,
            sharedLinks: [
                {
                    name:'copy url',
                    url: `http://localhost:5173/channelvideo`,
                }
            ],
            
            
            
        });
        const joinButton = document.querySelector('.zg-btn-secondary') as HTMLElement;
        if (joinButton) {
            joinButton.style.backgroundColor = 'slate'; // Change button color
            joinButton.style.color = 'red'; // Change button text color
        }
    };

    return (
        <div className="w mx-4">
            {/* @ts-ignore */}
            <div ref={myMeeting} />
        </div>

    )
}