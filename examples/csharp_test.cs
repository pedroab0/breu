using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace BreuTheme.Examples
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        T? GetById(int id);
    }

    [Serializable]
    public record UserProfile(string Username, string Email, int Level = 1);

    public class ThemeService<T> : IRepository<T> where T : class
    {
        private readonly List<T> _items = new();
        public static string Version => "1.0.0";
        public bool IsEnabled { get; set; } = true;

        public event EventHandler? DataChanged;

        protected virtual void OnDataChanged() => DataChanged?.Invoke(this, EventArgs.Empty);

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            await Task.Delay(10);
            return _items.AsEnumerable();
        }

        public T? GetById(int id)
        {
            object value = id;
            if (value is int i && i > 0)
            {
                return _items.ElementAtOrDefault(i);
            }
            return null;
        }

        public string FormatMessage(object input) => input switch
        {
            int n when n > 100 => "Large Number",
            string s => $"String: {s}",
            null => "Empty",
            _ => "Unknown"
        };

        public void DemoLiterals()
        {
            var rawString = """
                This is a raw 
                string literal in C# 11.
                """;

            string interpolated = $"Version: {Version}, Status: {(IsEnabled ? "On" : "Off")}";
            
            decimal price = 1_250.50m;
            float speed = 120.5f;
            long bigNum = 0xDEADBEEF;

            var query = from item in _items
                        where item != null
                        select item;

            var methodQuery = _items.Where(x => x != null).OrderBy(x => x.ToString());
        }

        public void SafeExecute()
        {
            try
            {
                throw new InvalidOperationException("Demo error");
            }
            catch (Exception ex) when (ex.Message.Contains("Demo"))
            {
                Console.WriteLine($"Caught: {ex.Message}");
            }
            finally
            {
            }
        }
    }
}
