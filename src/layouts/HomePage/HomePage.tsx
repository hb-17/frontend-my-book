import { Carousel } from "./component/Carousel"
import { ExploreTopBooks } from "./component/ExploreTopBooks"
import { Heros } from "./component/Heros"
import { LibraryService } from "./component/LibraryService"

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryService />
        </>
    )
}