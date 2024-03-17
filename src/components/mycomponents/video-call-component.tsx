import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function VideoCallComp() {
    const { roomId } = useParams();

    const myMeeting = async (element: HTMLElement) => {
        const appID = 489322233;
        const serverSecret = "df7711107f965eeec247cad615e730a0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            "328",
            Date.now().toString(),
            "Anonymous"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    
                    url: `http://localhost:5173/channelvideo`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true,
        });
        const joinButton = document.querySelector('.zg-btn-primary') as HTMLElement;
        if (joinButton) {
            joinButton.style.backgroundColor = 'blue'; // Change button color
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