import {createClient} from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId:"mh549g5u",
    dataset: "production",
    useCdn:true,
    apiVersion: "2023-03-01"
});

const builder = imageUrlBuilder(client);
export const urlFor= (source) => builder.image(source);

export default client;