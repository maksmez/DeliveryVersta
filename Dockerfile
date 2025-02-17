FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /out

# ���������� ����������� ����� ASP.NET Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /out .

# ���������, ��� ������ ������ ������� ��� ������ (�� ������ localhost)
ENV ASPNETCORE_URLS=http://+:5009

ENTRYPOINT ["dotnet", "DeliveryVersta.dll"]
