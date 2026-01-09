
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import popupImage from "@/assets/TAG-PC-AUR.jpg";

const StartupPopup = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="relative">
                    <img
                        src={popupImage}
                        alt="Startup Popup"
                        className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default StartupPopup;
