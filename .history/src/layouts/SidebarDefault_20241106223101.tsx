
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie } from "react-icons/hi";

const SidebarDefault = () => {
    return (
        <>

            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Logo className="justify-center  " href="#" img="/src/assets/liz.png" imgAlt="Liz"/>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Cierra sesión
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}

export default SidebarDefault