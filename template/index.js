import { AsyncApiController } from '../components/AsyncApiController';

export default function({ asyncapi, params }) {
    const toRender = {
        controller: AsyncApiController(params)
    };

    // Schemas is an instance of the Map
    return Object.entries(toRender).map(([name, renderFunction]) => {
        return renderFunction;
    }).flat();
}