
const BarChart = () => {
    return (
        <>
            <Card>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                        <Square3Stack3DIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Bar Chart
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="max-w-sm font-normal"
                        >
                            Visualize your data in a simple way using the
                            @material-tailwind/react chart plugin.
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="px-2 pb-0">
                    <Chart {...chartConfig} />
                </CardBody>
            </Card>

        </>
    )
}

export default BarChart