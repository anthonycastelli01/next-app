import { useRouter } from "next/router"

const NamePage = () => {
    const router = useRouter()
    const { name } = router.query
    return <h1>Welcome {name}</h1>
}

export default NamePage