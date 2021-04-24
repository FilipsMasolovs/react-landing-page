import './main.css'

import NewsBlock from '../../components/newsBlock/newsBlock'
import FeatureBlock from '../../components/featureBlock/featureBlock'
import PostBlock from '../../components/postBlock/postBlock'

export default function Main() {
    return (
        <div className='lp-main-container'>
            <NewsBlock />
            <FeatureBlock />
            <PostBlock />
        </div>
    )
}
