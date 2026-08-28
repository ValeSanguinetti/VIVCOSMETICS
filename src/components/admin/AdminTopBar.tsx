function AdminTopBar() {

    return (
        <header className="h-16 sticky top-0 z-40 bg-[#131313]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 md:px-10">

            <div>
                <span className="font-headline-md font-black uppercase tracking-tighter">
                    
                </span>
            </div>


            {/* <div className="flex items-center gap-5">

                <button
                    type="button"
                    aria-label="Notifications"
                    className="text-[#c4c7c8] hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined">
                        notifications
                    </span>
                </button>

                <button
                    type="button"
                    aria-label="Settings"
                    className="text-[#c4c7c8] hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                </button>

            </div>*/}

        </header>
    );
}

export default AdminTopBar;