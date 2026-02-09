import React from 'react';
import apiData from '../../ComApi/Api.json';

export default function Authors() {
    
    const authors = Array.from(
        new Map(apiData.posts.map(post => [post.author.name, post.author])).values()
    );

    return (
        <section className="bg-black py-20 border-t border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">فريقنا المبدع</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">تعرف على كتابنا</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {authors.map((author, index) => (
                        <div key={index} className="bg-[#111111] rounded-3xl p-8 border border-[#262626] hover:border-orange-500/30 transition-all duration-300 group text-center relative overflow-hidden">
                        
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />

                            <div className="relative mb-6 inline-block">
                                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-orange-500 to-yellow-500">
                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-[#111111]"
                                    />
                                </div>
                                
                                <div className="absolute bottom-0 right-0 bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center border-4 border-[#111111]">
                                    <i className="fa-solid fa-check text-[10px]" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{author.name}</h3>
                            <p className="text-orange-500 text-sm font-medium mb-6">{author.role}</p>

                            <div className="flex justify-center gap-3">
                                {[
                                    { icon: "fa-brands fa-linkedin-in", link: "#" },
                                    { icon: "fa-brands fa-github", link: "#" },
                                    { icon: "fa-brands fa-x-twitter", link: "#" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        className="w-10 h-10 rounded-xl bg-[#1a1a1a] text-neutral-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                                    >
                                        <i className={social.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
