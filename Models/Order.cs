using System.ComponentModel.DataAnnotations;

namespace DeliveryVersta.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Город отправителя обязателен")]
        public string SenderCity { get; set; }

        [Required(ErrorMessage = "Адрес отправителя обязателен")]
        public string SenderAddress { get; set; }

        [Required(ErrorMessage = "Город получателя обязателен")]
        public string ReceiverCity { get; set; }

        [Required(ErrorMessage = "Адрес получателя обязателен")]
        public string ReceiverAddress { get; set; }

        [Range(0.1, double.MaxValue, ErrorMessage = "Вес должен быть больше 0")]
        public double Weight { get; set; }

        [Required(ErrorMessage = "Дата забора груза обязательна")]
        public DateTime PickupDate { get; set; }
    }
}