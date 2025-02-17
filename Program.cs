using Microsoft.EntityFrameworkCore;
using DeliveryVersta.Data;


var builder = WebApplication.CreateBuilder(args);
//��������� ����� React, ����� �� ���� ������� � CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins(builder.Configuration.GetSection("ReactAddress").Value) // ��������� ������ ������� � ����� ������
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// ���������� ��������� ���� ������
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// ���������� ��������� ������������
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");
// ��������� ���������
app.MapControllers();

//��������� ��������
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.Migrate();
}


app.Run();