
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie } from "react-icons/hi";

const SidebarDefault = () => {
    return (
        <>

            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Logo href="#" img="/liz" imgAlt="Flowbite logo">
                    Flowbite
                </Sidebar.Logo>
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