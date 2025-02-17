FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /out

# Используем минимальный образ ASP.NET Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /out .

# Указываем, что сервер должен слушать ВСЕ адреса (не только localhost)
ENV ASPNETCORE_URLS=http://+:5009

ENTRYPOINT ["dotnet", "DeliveryVersta.dll"]
