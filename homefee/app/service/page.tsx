interface IService {
  serviceName:string
  createdAt: string
  tags: string
  name: string
  phoneNumber: string
  status:string
  location:string
  rating:number
  apartmentId:number
}
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/services", {
    cache: "force-cache", 
  })
  const data = await res.json()
  return { services: data }
}

const AboutComponent = async () => {
  const servicesData = await fetchData()
  console.log("data", servicesData as unknown as IService)

  return (
    <>
      {servicesData.services.map((s: any) => (
        <div key={s.id}>{s.name}-{s.phoneNumber}-{s.serviceName}-{s.rating}</div>
        
      ))}
    </>
  )
}

export default AboutComponent