using Microsoft.AspNetCore.Mvc;
using DeliveryVersta.Models;
using DeliveryVersta.Data;
using Microsoft.EntityFrameworkCore;

namespace DeliveryVersta.Controllers
{
    [Route("api/[controller]")] // Маршрут для API: /api/orders
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        // Внедрение зависимости контекста базы данных
        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            // Возвращает список всех заказов из базы данных
            return await _context.Orders.ToListAsync();
        }

        // GET: api/orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            // Поиск заказа по ID
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound(); // Если заказ не найден, возвращает 404
            }

            return order; // Возвращает найденный заказ
        }

        // POST: api/orders
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            // Добавление нового заказа в базу данных
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Возвращает ответ 201 (Created) с данными созданного заказа
            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }
    }
}