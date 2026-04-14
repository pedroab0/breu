package com.breu.theme.test;

import java.util.*;
import java.util.stream.Collectors;
import java.time.LocalDateTime;

@SuppressWarnings("unused")
public class JavaThemeTest<T extends Comparable<T>> {

    public static final String THEME_NAME = "Breu";
    private final int id;
    protected String status = "PENDING";
    private List<T> items = new ArrayList<>();

    public JavaThemeTest(int id) {
        this.id = id;
    }

    public interface TaskProcessor {
        void execute(String message);
    }

    private static class InternalState {
        boolean active = true;
    }

    @Override
    public String toString() {
        return String.format("Test[id=%d, name=%s]", id, THEME_NAME);
    }

    public synchronized void addItem(T item) throws IllegalArgumentException {
        if (item == null) {
            throw new IllegalArgumentException("Item cannot be null");
        }
        this.items.add(item);
    }

    public List<String> getProcessedItems() {
        return items.stream()
                .filter(Objects::nonNull)
                .map(item -> item.toString().toUpperCase())
                .collect(Collectors.toList());
    }

    public void runTask(TaskProcessor processor) {
        Optional.ofNullable(processor).ifPresent(p -> {
            p.execute("Running at " + LocalDateTime.now());
        });
    }

    public void demonstrateLogic(int value) {
        switch (value) {
            case 1:
                System.out.println("Low");
                break;
            case 10:
                System.out.println("High");
                break;
            default:
                if (value > 100) {
                    for (int i = 0; i < 5; i++) {
                        System.out.print(i + " ");
                    }
                }
        }
        
        try (Scanner scanner = new Scanner(System.in)) {
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

enum Priority {
    LOW, MEDIUM, HIGH
}
