import { Body, Container, Head, Heading, Html, Preview, Tailwind } from "@react-email/components";
import { OrderInformation } from "./components/OrderInformation";
import db from "@/db/db";

type PurchaseReceiptEmailProps = {
    product: {
        name: string
        imagePath: string
        description: string
    }
    order: { id: string
        createdAt: Date
        pricePaidInCents: number
     }
     downloadVerificationId: string
}

// PurchaseReceiptEmail.PreviewProps = {
//     product: { 
//         name: "Product name", 
//         description: "Some description",
//         imagePath: "/products/da236c72-41d4-43e1-832a-bb8b4d1be523-pexels-chanaka-318741-906494 (1).jpg"},
//     order:  {
//         id: crypto.randomUUID(),
//         createdAt: new Date(),
//         pricePaidInCents: 10000,
//     },
//     downloadVerificationId: crypto.randomUUID()
// } satisfies PurchaseReceiptEmailProps

export default function PurchaseReceiptEmail({ product, order, downloadVerificationId }: PurchaseReceiptEmailProps){

    return (
        <Html>
            <Preview>Download {product.name} and view receipt</Preview>
            <Tailwind>
                <Head/>
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <Heading>Purchase Receipt</Heading>
                        <OrderInformation order={order} product={product} downloadVerificationId={downloadVerificationId}/>
                    </Container>

                </Body>
            </Tailwind>
        </Html>
    )
}