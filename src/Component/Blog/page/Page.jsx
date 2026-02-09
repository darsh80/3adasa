import React, { useEffect } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import Body from './body'
import apiData from '../../../ComApi/Api.json'

export default function Page() {
  const { slug } = useParams();
  const post = apiData.posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1>المقال غير موجود</h1>
    </div>
  }

  return <>
    <Header post={post} />
    <Body post={post} />
  </>
}
