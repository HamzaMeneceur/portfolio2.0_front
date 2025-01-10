export default function Navigate() {
    return (
    <>
        <nav
        className="bg-gray-400"
        >
            <div
            className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
            >
                <div
                className="relative flex h-16 items-center justify-between"
                >
                    <div
                    className="absolute inset-y-0 left-0 flex items-center sm:hiden"
                    >
                        <button 
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-400 hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/**
                             * Icon quand le menu est clos
                             * 
                             * Menu ouvert : "hidden", Menu clos : "block"
                             */}
                             <svg
                             className="block size-6"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             aria-hidden="true"
                             data-slot="icon"
                             >
                                <path
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                             </svg>
                             {/**
                             * Icon quand le menu est ouvert
                             * 
                             * Menu ouvert : "block", Menu clos : "hidden"
                             */}
                             <svg
                             className="hidden size-6"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             aria-hidden="true"
                             data-slot="icon"
                             >
                                <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12" 
                                />
                             </svg>
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    </>
)
}