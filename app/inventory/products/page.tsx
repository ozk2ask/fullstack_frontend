'use client'

import { useState, useEffect } from 'react';
import productsData from "./sample/dummy_products.json";

type ProductData = {
    id: number;
    name: string;
    price: number;
    description: string;
};

export default function Page() {
    const [data, setData] = useState<Array<ProductData>>([]);

    useEffect(() => {
        setData(productsData);
    }, [])

    return(
        <>
            <h2>商品一覧</h2>
            <p>商品の一覧を表示</p>
            <button>商品を追加する</button>

            <table>
                <thead>
                    <tr>
                        <th>商品ID</th>
                        <th>商品名</th>
                        <th>単価</th>
                        <th>説明</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>コットン100%バックリボンティアードワンピース（黒）</td>
                        <td>6900</td>
                        <td>大人の愛らしさを引き立てる。ナチュラルな風合い。リラックス×トレンドを楽しめる、上品なティアードワンピース。</td>
                        <td><button>更新・削除</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ライトストレッチカットソー（ネイビー）</td>
                        <td>2980</td>
                        <td>しなやかな肌触りが心地よい、程よいフィット感のカットソー。ビジネスカジュアルにも普段使いにも使える、ベーシックなデザイン。</td>
                        <td><button>更新・削除</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ベルト付きデニムパンツ（ブルー）</td>
                        <td>5980</td>
                        <td>定番のデニムパンツに、フェミニンなベルトをプラスしたスタイリッシュなアイテム。カジュアルにもキレイ目にも合わせやすい。</td>
                        <td><button>更新・削除</button></td>
                    </tr> */}

                    {data.map((data: any) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.description}</td>
                            <td><button>更新・削除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}