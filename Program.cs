using Microsoft.EntityFrameworkCore;
using DeliveryVersta.Data;


var builder = WebApplication.CreateBuilder(args);
//Указываем адрес React, чтобы не было проблем с CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins(builder.Configuration.GetSection("ReactAddress").Value) // Разрешить только запросы с этого домена
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Добавление контекста базы данных
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Добавление поддержки контроллеров
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");
// Настройка маршрутов
app.MapControllers();

//Запускаем миграции
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.Migrate();
}


app.Run();