export default function SideBar({children}){
    return(
        
        <aside className="bg-cl_roxo w-4/12 flex flex-col gap-20 items-center">
            <h1 className="text-white text-xl text-wrap text-center font-semibold font-mono mt-10 w-52">Artistas mais ouvidos no momento</h1>
            {children}
        </aside>
    )
}