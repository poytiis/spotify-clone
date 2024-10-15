using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using System.Text.Json;


namespace FunctionsBackEnd.Function
{
    public class LogIn
    {
        private readonly ILogger<HttpTrigger1> _logger;

        public LogIn(ILogger<HttpTrigger1> logger)
        {
            _logger = logger;
        }

        [Function("LogIn")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req, User user ) //HttpRequest req,
        {
            //dynamic body = await req.Body.ReadAsync();
            //var e = JsonConvert.DeserializeObject<EventData>(body as string);
            var body = await new StreamReader(req.Body).ReadToEndAsync();
            var k = JsonSerializer.Deserialize<User>(body);
            //var dummy = await req.ReadFromJsonAsync<User>();
            _logger.LogInformation("Log in called");
            return new OkObjectResult(k?.password + "LogIn Azure Function! " );
        }

    }

    //public record User(string email, string password);

    public class User {
        public required string email { get; set;}
        public required string password { get; set;}
    }
}