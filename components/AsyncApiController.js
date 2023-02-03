export function AsyncApiController() {
    return `

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
@Path("/asyncApi")
public class AsyncApiController {
    @GET
    @Path("{path:.*}")
    public Response get(@PathParam("path") String path) {
    final var resource = getClass().getResourceAsStream(String.format("/asyncApi/%s", path));
    return Response.ok().entity(resource).build();
    }
}`;
}